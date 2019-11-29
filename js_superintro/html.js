<!doctype html>
<html>
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width,initial-scale=1">
    <meta http-equiv="x-ua-compatible" content="IE=edge">
    <title>template</title>
    <link href="./style.css" rel="stylesheet" type="text/css">
  </head>

  <body>
    <header>
      <div class="header-contents">
        <h1>タイトル</h1>
        <h2>サブタイトル</h2>
      </div><!-- /.header-contents -->
    </header>

    <div class="main-wrapper">
      <section>
        <p id="choice">ここに日時を表示します</p>
      </section>
    </div><!-- /.main-wrapper -->

    <footer>JavaScript Samples</footer>
    <script src="script.js"></script>
    <script>
      // コンソール出力
      //実行：  node <filename>   (in powershell)
      console.log('Hello World');

      //ダイアログ
      window.alert('Love You');

      //現在時刻
      console.log(document.getElementById('choice'));
      document.getElementById('choice').textContent = new Date();
      console.log(document.getElementById('choice').textContent);
      console.log(new Date());

      //   OK or CANSEL
      console.log(window.confirm('ゲームスタート！準備はいい？'));
      
      if(window.confirm('Are You Ready?')){
        window.alert("Let's start!")
      }else{
        window.alert('See You Later')
      };

      //   input text
      let answer = window.prompt('Can you help me? \n  yes/no');
      if(answer === 'yes'){
        window.alert('Fight!');
      }else if(answeer === no){
        window.alert('You can do it!');
      }else{
        window.alert('yes/no');
      }
      
    </script>
  </body>
</html>

