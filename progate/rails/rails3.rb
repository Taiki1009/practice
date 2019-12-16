    投稿詳細画面
<routes.rb>
  get "posts/index" => "posts#index"   #投稿一覧
  get "posts/:id" => "posts#show"      #投稿詳細: idによらず、showアクションに飛ばす
 

<posts_controller.rb>
  def show
      # paramsでURLから投稿idを取得し、find_byでDBからデータを取得→showで投稿データを使用する
    @post = Post.find_by(id: params[:id])   #投稿詳細: idに合致する画面を表示
  end


<show_html.erb>
  <%= @post.content %>    #投稿内容を表示
  <%= @post.created_at%>  #投稿日付を表示


<index_html.erb>                          #投稿一覧
  <% @posts.each do |post| %>             #投稿を順番に表示
    <div class="posts-index-item">
      <%= link_to(post.content, "/posts/#{post.id}") %>     #投稿一覧画面から詳細画面へのリンク
    </div>
  <% end %>




    新規投稿
<routes.rb>
  get "posts/new" => "posts#new"              #新規投稿画面
  post "posts/create" => "posts#create"       #DBとのやり取り


<posts_controller.rb>
  def new
  end

  #DBとのやり取りは画面不要→cotent取得,保存,投稿一覧画面に戻る  で終了
  def create
    @post = Post.new(content: params[:content])
    @post.save
    redirect_to("/posts/index")     #指定したURLに移動
  end


<new_html.erb>
  #form_tagで囲んだ部分を指定のURLへ送信する
  <%= form_tag("/posts/create") do %>
    <div class="form">
      <div class="form-body">
        <textarea name="content"></textarea>      #投稿内容(=入力データ)にname属性をつける→createアクションへ
        <input type="submit" value="投稿">
      </div>
    </div>
  <% end %>



<posts_controller.rb>
  #投稿一覧で新しい順にsort
  def index
    @post = Post.all.order(created_at: desc)
  end
