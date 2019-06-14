## 基本構造
mysiteの構造は以下
```bash
$ tree mysite
mysite
├── mysite
│   ├── wsgi.py
│   ├── urls.py
│   ├── settings.py
│   ├── __pycache__
│   └── __init__.py
├── manage.py
├── app1
│   ├── views.py
│   ├── tests.py
│   ├── models.py
│   ├── migrations
│   ├── apps.py
│   ├── admin.py
│   └── __init__.py
└── app2
    ├── views.py
    ...
```

[ログイン機能の実装](#limit)

## ログイン・サインアップ機能の作成とCoustomUserの作成
---

### ログイン・ログアウト
ログイン・ログアウト用のurl_confはDjangoにモジュールとして存在していて、以下で設定できる。
```py
# mysite/mysite/urls.py

from django.urls import path,include
urlpatterns=[
path('<APP>', include('django.contrib.auth.urls'))
]
```

login,logout用のhtmlはregistration以下に作成する。(djangoの仕様。)
templatesの位置はmyapp内でもいいが、基本的に全app共通で使うことになるだろうので、
以下の様にtemplatesを作成するべき。

```bash
mysite
├── app1
├── app2
├── manage.py
├── mysite
└── templates
    └── registration
        ├── logged_out.html
        └── login.html
```
この階層のtemplatesを読み込むためと、ログイン後のリダイレクトを設定するために
以下のようにsetting.pyに追加する。
```py
TEMPLATES = [
  {
    ...
    'DIRS': [os.path.join(BASE_DIR, 'templates')], # 左を追加
    ...
  }
]

LOGIN_REDIRECT_URL = '/'
```

login.html,logged_out.htmlのテンプレートを以下に示す。base.html等に合わせて適当に変更をする。
```py
# templates/registration/login.html
# loginのテンプレート。変更可能。

{% extends 'base.html' %}

{% block body %}
<h1>Login</h1>
<section class="common-form">
    {% if form.errors %}
    <p class="error-msg">Your username and password didn't match. Please try again.</p>
    {% endif %}

    {% if next %}
    {% if user.is_authenticated %}
    <p class="error-msg">Your account doesn't have access to this page. To proceed,
        please login with an account that has access.</p>
    {% else %}
    <p class="error-msg">Please login to see this page.</p>
    {% endif %}
    {% endif %}

    <form method="post" action="{% url 'login' %}">
        {% csrf_token %}
        {{ form.as_p }}
        <button type="submit" class="submit">Login</button>
        <input type="hidden" name="next" value="{{ next }}"/>
    </form>
</section>

{% endblock %}
```

```py
# templates/registration/logged_out.html

{% extends 'base.html' %}

{% block body %}
<h1>Logged Out</h1>
<p>Thanks for spending some quality time with the Web site today.</p>
<p><a href="{% url 'login' %}">Log in again</a></p>
{% endblock %}
```

これでログインをすると、`HOST:PORT/`にリダイレクトする。

### signup
signup用の機能は用意されてない。ので、作成する。
デフォルトだとDjangoに用意されているDefaultUserモデルが使用されるが、編集が非常に面倒くさいようなので、自ら定義可能なCustomUserモデルをDefaultUserモデルを継承して作成する。
CustomUserを作成するために新たなaccounts appを作成する。
> - 勿論既存appにCustomUserを作成してもいいが、loginのみを管理するappを作成してその中にUserを作成した方がよさそう。(Turtorial推奨？[参照](https://it-engineer-lab.com/archives/544))
> - ただ、他app内のモデルでCustomUserをForeignKeyにしたい場合の最適解はよくわからん。というのも、他appのモデルは多分importできないため。user_idみたいなのを別で定義するべき？)

- accounts appを作成
```sh
$ python manage.py startapp accounts
```

- プロジェクトにaccounts appを追加。
- AUTH_USER_MODELを新しいCustomUserに設定。
```py
# mysite/mysite/settings.py
INSTALLED_APPS = [
  'accounts.apps.AccountsConfig', # [追加]
]

AUTH_USER_MODEL = 'accounts.CustomUser'
```

- accounts appのためにurl_confを設定。
```py
# mysite/mysite/urls.py
 
from django.contrib import admin
from django.urls import include, path
 
urlpatterns = [
    # https://docs.djangoproject.com/en/2.0/topics/auth/default/#module-django.contrib.auth.views
    path('', include('app1.urls')),
    path('accounts/', include('accounts.urls')), # [追加]
    path('accounts/', include('django.contrib.auth.urls')),
    path('admin/', admin.site.urls),
]
```
- accounts appからsignupへのview作成。
```py
# myblog/accounts/urls.py

from django.urls import path
from . import views
 
# set the application namespace
# https://docs.djangoproject.com/en/2.0/intro/tutorial03/
app_name = 'accounts'
 
urlpatterns = [
    # ex: /accounts/signup/
    path('signup/', views.SignUpView.as_view(), name='signup'),
]
```
- CustomUserモデルの作成(なくてもいけるが多分こっちのがいい)
```py
# mysite/accounts/models.py

from django.db import models
from django.contrib.auth.models import AbstractUser

# DefultUserを継承。Userモデルをカスタマイズしたい場合はここで。
class CustomUser(AbstractUser):
    pass
    user_name = models.CharField(max_length=100)

    def __str__(self):
        return self.user_name

```

- CustomFormの作成
```py
# mysite/accounts/models.py

from django import forms
from django.contrib.auth.forms import UserCreationForm
# CustomUserをimport
from .models import CustomUser

# CustomUser用のFormを作成。Viewで使用する。
class CustomUserCreationForm(UserCreationForm):

    class Meta(UserCreationForm.Meta):
        model = CustomUser
        fields = UserCreationForm.Meta.fields

```

- Viewの作成
```py
# mysite/accounts/views.py


from .forms import CustomUserCreationForm
# CustomUser作成してない場合はUserCreationFormを使用。
# from django.contrib.auth.forms import UserCreationForm

from django.urls import reverse_lazy
from django.views import generic
 
class SignUpView(generic.CreateView):
    form_class = CustomUserCreationForm
    #form_class = UserCreationForm
    
    success_url = reverse_lazy('login')
    template_name = 'accounts/signup.html'
```

- signup用のtemplatesを作成。
```py
# myblog/accounts/templates/accounts/signup.html
 
{% extends 'base.html' %}
 
{% block content %}
<h1>Sign up</h1>
<section class="common-form">
    <form method="post">
        {% csrf_token %}
        {{ form.as_p }}
        <button type="submit" class="submit">Sign up</button>
    </form>
</section>
{% endblock %}
```


<a name="limit"></a>
### ログイン制限の実装
ログインしていないユーザにアクセスできないようにする簡単な手法。
- 関数型viewの場合

```py
# views.py
from django.contrib.auth.decorators import login_required
 
@login_required
def my_view(request):
    ...
```
> ユーザがログインしてない場合は、settings.LOGIN_URLにリダイレクト

- クラスviewの場合
```py
# views.py
from django.contrib.auth.mixins import LoginRequiredMixin
 
class MyView(LoginRequiredMixin, View):
    login_url = '/login/'
    redirect_field_name = 'redirect_to'
```


### テンプレート上における、User(CutomUser)モデル扱い
html場でログイン中のユーザにのみ表示される。
```html
<!--blog/blogs/templates/blogs/post_list.html-->
{% if request.user.is_authenticated %}
<h1>Username</h1>
<p class="user-name">{{ user }}</p>
{% endif %}
```
- ログインしているユーザのidが欲しい場合。
`request.user.id`で可能
```html
{% if request.user.id == object.author_id %}
<section class="post-edit">
    <a class="act" href="{% url 'blogs:update' post.pk %}">Edit</a>
    <a class="act" href="{% url 'blogs:delete' post.pk %}">Delete</a>
</section>
{% endif %}
```
`{% if request.user.id == object.author_id %} 〜〜〜 {% endif %}`
はログインしているUserと記事を書いたUserが一緒の場合、つまり本人にのみ見せるテンプレート。





