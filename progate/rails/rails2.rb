投稿画面について
  controller: HOMEとPOSTSは別々に作成
              Viewで使用する変数は”＠変数名”としてここで定義

  Views：.erbファイルは、埋め込みRubyのHTMLの略
         <% %>で囲むことでRubyを利用できる


DBについて
  DB作成
  rails g model Post content:text
  テーブル作成
  rails db:migrate

  DBとの接続
  rails console (ターミナル上)
    データ作成
    post = Post.new(content:"コメント")
    データ保存
    post.save

    データ取得
    post = Post[i]
    post = Post[i].content
    




HTML全体で共通の内容をまとめる
views/layouts/application.html.erb
ファイル内の<%= yield %>に代入されて、ブラウザに表示される