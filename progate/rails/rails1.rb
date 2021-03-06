新規アプリケーション作成
$ rails new <app_name>

railsのサーバーは常に起動しておく
$ rails server


ページ生成
$ rails g controller <controller_name> <action_name>

<controller_name>:どのコントローラーか
<action_name>    :そこの中の何を返すか

$ rails g controller home top の場合

  Viewファイル
    ブラウザに表示するフロント（html）のこと
  ./home/top.html.erb に存在

  Controllerファイル
    リクエストされたViewを持っている場合、ブラウザに返す
  ./controllers/home_controller.erb に存在
  def top end

  Routingファイル
    リクエストされたURLを受け取り、コントローラーとアクションを指示する
  ./config/routes.rb
  get "home/top" => "home#top" 


サイトのURLをRoutingで決めて、Controllerで表示させるHTMLを選び、ViewでHTMLを編集する


CSSファイル
  home.cssで編集した内容は"すべてのView"に適応される
./assets/stylesheets/home.css

RoutingのリクエストURLを、HTMLの<a href>に記述する