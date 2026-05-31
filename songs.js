const songs = [
  {
    id: "sacred-world",
    title: "Sacred world",
    bpm: 142,
    duration: 300,
    html: `
<div class="section">
<ruby>吹<rt>ふ</rt></ruby>き<ruby>荒<rt>すさ</rt></ruby>ぶレイス <ruby>立<rt>た</rt></ruby>ち<ruby>向<rt>む</rt></ruby>かえ minds to fighter<br>
<ruby>讃<rt>たた</rt></ruby>えられし<ruby>孤高<rt>ここう</rt></ruby>の<ruby>勇者<rt>ゆうしゃ</rt></ruby> <ruby>此処<rt>ここ</rt></ruby>に<ruby>芽吹<rt>めぶ</rt></ruby>く<br>
</div>

<div class="section">
<span class="w">(I found <ruby>進<rt>すす</rt></ruby>むべき<ruby>道<rt>みち</rt></ruby>へと fight now)</span><br>
<ruby>黒闇<rt>こくあん</rt></ruby>の<ruby>薄明<rt>うすあ</rt></ruby>かりに <ruby>踏<rt>ふ</rt></ruby>み<ruby>入<rt>い</rt></ruby>れた begin now<br>
<span class="w">(I can <ruby>不滅<rt>ふめつ</rt></ruby>への<ruby>道<rt>みち</rt></ruby>から help now)</span><br>
<ruby>容赦<rt>ようしゃ</rt></ruby>なく<ruby>猛<rt>たけ</rt></ruby>るspecter<br>
</div>

<div class="section">
<ruby>選<rt>えら</rt></ruby>ぶべき Right choose <span class="w">(Excite したらすぐ dead down)</span><br>
<ruby>宙<rt>ちゅう</rt></ruby>を<ruby>切<rt>き</rt></ruby>る<ruby>渦<rt>うず</rt></ruby>の<ruby>中<rt>なか</rt></ruby>で <span class="w">(look up at the sky)</span><br>
<ruby>蠢<rt>うごめ</rt></ruby>いた<ruby>運命<rt>さだめ</rt></ruby>へと <span class="w">(so don't waver)</span><br>
The soul which burns <span class="w">(just break, just burn, just blaze, change the world)</span><br>
</div>

<div class="section">
この<ruby>力<rt>ちから</rt></ruby>が<ruby>鬼才<rt>きさい</rt></ruby>を<ruby>解<rt>と</rt></ruby>き <ruby>誰<rt>だれ</rt></ruby>でもなくて <ruby>俯<rt>うつむ</rt></ruby>く<ruby>先<rt>さき</rt></ruby>に<br>
<ruby>吐<rt>は</rt></ruby>き<ruby>出<rt>だ</rt></ruby>した<ruby>息<rt>いき</rt></ruby> <ruby>仰<rt>あお</rt></ruby>げはもう<br>
<ruby>掴<rt>つか</rt></ruby>んだ<ruby>灯火<rt>ともしび</rt></ruby>は<ruby>消<rt>け</rt></ruby>させない <span class="w">(<ruby>何<rt>なに</rt></ruby>があっても<ruby>消<rt>け</rt></ruby>させない)</span><br>
<span class="w">(<ruby>開天闢地<rt>かいてんへきち</rt></ruby>へとhurry up したら まだまだいけるgo way)</span><br>
</div>

<div class="section">
GO, shooting out <ruby>果敢<rt>かかん</rt></ruby>に<ruby>舞<rt>ま</rt></ruby>い<ruby>踊<rt>おど</rt></ruby>れ<br>
<ruby>絆<rt>きずな</rt></ruby>が<ruby>放<rt>はな</rt></ruby>つ<ruby>一<rt>ひと</rt></ruby>つのTreasure power<br>
<ruby>突<rt>つ</rt></ruby>き<ruby>抜<rt>ぬ</rt></ruby>けろ <ruby>希望<rt>きぼう</rt></ruby>とバイブスで<br>
<ruby>躓<rt>つまず</rt></ruby>いて <ruby>後悔<rt>こうかい</rt></ruby>なんて<ruby>許<rt>ゆる</rt></ruby>されない<br>
<span class="w">(<ruby>世界<rt>せかい</rt></ruby>)</span> <ruby>救<rt>すく</rt></ruby>うべき <span class="w">(<ruby>救<rt>すく</rt></ruby>え!)</span> <ruby>世界<rt>せかい</rt></ruby>は<br>
place of sacredness <span class="w">(place of sacredness)</span><br>
</div>

<div class="section">
<ruby>上辺<rt>うわべ</rt></ruby>だけなぞるような<ruby>戦<rt>いくさ</rt></ruby>に<ruby>興味<rt>きょうみ</rt></ruby>はない<br>
<span class="w">(I say <ruby>優柔<rt>ゆうじゅう</rt></ruby><ruby>不断<rt>ふだん</rt></ruby>は no, no, run now)</span><br>
<ruby>遥<rt>はる</rt></ruby>か<ruby>彼方<rt>かなた</rt></ruby>から<ruby>威力<rt>いりょく</rt></ruby>ぶら<ruby>下<rt>さ</rt></ruby>げた devil<br>
<span class="w">(I follow <ruby>真向<rt>まっこう</rt></ruby><ruby>勝負<rt>しょうぶ</rt></ruby> <ruby>挑<rt>いど</rt></ruby>んでcarry now)</span><br>
</div>

<div class="section">
<ruby>一瞥<rt>いちべつ</rt></ruby>を<ruby>投<rt>な</rt></ruby>げた<ruby>後<rt>あと</rt></ruby>の<br>
<ruby>油断<rt>ゆだん</rt></ruby>が<ruby>天<rt>てん</rt></ruby>を<ruby>唾<rt>つば</rt></ruby>す <span class="w">(Exit <ruby>嗅<rt>か</rt></ruby>ぎつけろ dead down)</span><br>
<ruby>宙<rt>ちゅう</rt></ruby>に<ruby>爆<rt>は</rt></ruby>ぜる <ruby>赤<rt>あか</rt></ruby>い<ruby>滲<rt>にじ</rt></ruby>む<ruby>眼<rt>め</rt></ruby> <span class="w">(<ruby>塵<rt>ちり</rt></ruby>へと<ruby>化<rt>か</rt></ruby>した <ruby>浮<rt>う</rt></ruby>かぶ<ruby>真実<rt>しんじつ</rt></ruby>)</span><br>
<ruby>拭<rt>ぬぐ</rt></ruby>ったら <ruby>全部<rt>ぜんぶ</rt></ruby><ruby>背負<rt>せお</rt></ruby>い <span class="w">(look up at the sky)</span><br>
<ruby>互<rt>たが</rt></ruby>いの<ruby>刃<rt>は</rt></ruby>を<ruby>交<rt>か</rt></ruby>わし <span class="w">(so don't waver)</span><br>
strength of the faith <span class="w">(just break, just burn, just blaze, change the world)</span><br>
</div>

<div class="section">
この<ruby>力<rt>ちから</rt></ruby>が<ruby>幕<rt>まく</rt></ruby>を<ruby>破<rt>やぶ</rt></ruby>り <ruby>誰<rt>だれ</rt></ruby>かの<ruby>為<rt>ため</rt></ruby>に<ruby>生<rt>い</rt></ruby>きることで<br>
<ruby>柯<rt>か</rt></ruby><ruby>会<rt>かい</rt></ruby><ruby>之<rt>の</rt></ruby><ruby>盟<rt>めい</rt></ruby> <ruby>信<rt>しん</rt></ruby>じ<ruby>合<rt>あ</rt></ruby>って<br>
<ruby>歪<rt>ゆが</rt></ruby>んだ<ruby>未来<rt>みらい</rt></ruby>を<ruby>滅<rt>ほろぼ</rt></ruby>せ <span class="w">(<ruby>何<rt>なに</rt></ruby>があっても<ruby>滅<rt>ほろぼ</rt></ruby>せ)</span><br>
<span class="w">(<ruby>急転<rt>きゅうてん</rt></ruby><ruby>直下<rt>ちょっか</rt></ruby>からのrise up したらまだまだいけるgo way)</span><br>
</div>

<div class="section">
GO, shooting grief <ruby>何<rt>なに</rt></ruby>も<ruby>怖気付<rt>おじけづ</rt></ruby>くな<br>
あの<ruby>日<rt>ひ</rt></ruby><ruby>交<rt>か</rt></ruby>わした <ruby>忠誠<rt>ちゅうせい</rt></ruby>に<ruby>誓<rt>ちか</rt></ruby>え<br>
<ruby>制覇<rt>せいは</rt></ruby>へと<ruby>繋<rt>つな</rt></ruby>ぐ バイタリティ<br>
<ruby>断末魔<rt>だんまつま</rt></ruby>の<ruby>嘶<rt>いなな</rt></ruby>きに <ruby>蘇<rt>よみがえ</rt></ruby>る<br>
<span class="w">(<ruby>世界<rt>せかい</rt></ruby>)</span> <ruby>守<rt>まも</rt></ruby>るべき <span class="w">(<ruby>守<rt>まも</rt></ruby>れ!)</span> <ruby>世界<rt>せかい</rt></ruby>は<br>
place of sacredness <span class="w">(place of sacredness)</span><br>
</div>

<div class="section">
<ruby>幻<rt>まぼろし</rt></ruby>か<ruby>確<rt>たし</rt></ruby>かめてみて?<br>
<ruby>唇<rt>くちびる</rt></ruby><ruby>噛<rt>か</rt></ruby>み<ruby>締<rt>し</rt></ruby>めた<ruby>痛<rt>いた</rt></ruby>みを…<br>
</div>

<div class="section">
<ruby>宙<rt>ちゅう</rt></ruby>からの<ruby>渦<rt>うず</rt></ruby>の<ruby>中<rt>なか</rt></ruby>で <span class="w">(look up at the sky)</span><br>
<ruby>蠢<rt>うごめ</rt></ruby>いた<ruby>運命<rt>さだめ</rt></ruby>へと <span class="w">(so don't waver)</span><br>
The soul which burns <span class="w">(just break, just burn, just blaze, change the world)</span><br>
</div>

<div class="section">
ループしてく<ruby>世<rt>よ</rt></ruby>の<ruby>震慄<rt>しんりつ</rt></ruby><br>
<ruby>時<rt>とき</rt></ruby>に<ruby>欺<rt>あざむ</rt></ruby>き<ruby>背<rt>そむ</rt></ruby>くけれど<br>
<ruby>因縁<rt>いんねん</rt></ruby>の<ruby>鍵<rt>かぎ</rt></ruby> <ruby>手<rt>て</rt></ruby>にしたなら<br>
<ruby>掴<rt>つか</rt></ruby>んだ<ruby>灯火<rt>ともしび</rt></ruby>は<ruby>消<rt>け</rt></ruby>させない <span class="w">(<ruby>何<rt>なに</rt></ruby>があっても<ruby>消<rt>け</rt></ruby>させない)</span><br>
<span class="w">(<ruby>開天闢地<rt>かいてんへきち</rt></ruby>へとhurry up したらlastまでいけgo way)</span><br>
</div>

<div class="section">
GO, shooting out <ruby>果敢<rt>かかん</rt></ruby>に<ruby>舞<rt>ま</rt></ruby>い<ruby>踊<rt>おど</rt></ruby>れ<br>
<ruby>絆<rt>きずな</rt></ruby>が<ruby>放<rt>はな</rt></ruby>つ<ruby>一<rt>ひと</rt></ruby>つのTreasure power<br>
<ruby>突<rt>つ</rt></ruby>き<ruby>抜<rt>ぬ</rt></ruby>けろ <ruby>希望<rt>きぼう</rt></ruby>とバイブスで<br>
<ruby>躓<rt>つまず</rt></ruby>いて <ruby>後悔<rt>こうかい</rt></ruby>なんて <span class="w">(so, shut out!)</span><br>
</div>

<div class="section">
GO, shooting grief <ruby>何<rt>なに</rt></ruby>も<ruby>怖気付<rt>おじけづ</rt></ruby>くな<br>
あの<ruby>日<rt>ひ</rt></ruby><ruby>交<rt>か</rt></ruby>わした <ruby>忠誠<rt>ちゅうせい</rt></ruby>に<ruby>誓<rt>ちか</rt></ruby>え<br>
<ruby>制覇<rt>せいは</rt></ruby>へと<ruby>繋<rt>つな</rt></ruby>ぐ バイタリティ<br>
<ruby>断末魔<rt>だんまつま</rt></ruby>の<ruby>嘶<rt>いなな</rt></ruby>きに <ruby>蘇<rt>よみがえ</rt></ruby>る<br>
</div>

<div class="section">
<span class="w">(<ruby>遠<rt>とお</rt></ruby>く)</span> <ruby>鼓動<rt>こどう</rt></ruby>の<ruby>音<rt>ね</rt></ruby> <span class="w">(<ruby>響<rt>ひび</rt></ruby>く)</span> <ruby>守<rt>まも</rt></ruby>るべき <span class="w">(…<ruby>世界<rt>せかい</rt></ruby>で)</span><br>
<ruby>微<rt>かす</rt></ruby>かに <span class="w">(<ruby>強<rt>つよ</rt></ruby>く)</span> <ruby>開<rt>ひら</rt></ruby>いた <span class="w">(<ruby>叫<rt>さけ</rt></ruby>べ)</span> victory<br>
</div>

<div class="section">
<ruby>行<rt>い</rt></ruby>け! minds to fighter<br>
</div>
`
  },
  {
    id: "welcome-to-pandemonium",
    title: "WELCOME TO PANDEMONIUM",
    bpm: 204,
    duration: 255,
    html: `
<div class="section">
<ruby>腹<rt>はら</rt></ruby>ん<ruby>中<rt>なか</rt></ruby> <ruby>溜<rt>た</rt></ruby>めに<ruby>溜<rt>た</rt></ruby>めた<ruby>罵詈雑言<rt>ばりぞうごん</rt></ruby><br>
<ruby>生贄<rt>いけにえ</rt></ruby>に<ruby>捧<rt>ささ</rt></ruby>げて<ruby>吐<rt>は</rt></ruby>き<ruby>出<rt>だ</rt></ruby>した<ruby>百鬼夜行<rt>ひゃっきやこう</rt></ruby><br>
<ruby>殺気<rt>さっき</rt></ruby><ruby>早速<rt>さっそく</rt></ruby>Dancing<ruby>待<rt>ま</rt></ruby>ってろよ Better watch your back<br>
<span class="w">(<ruby>魑魅魍魎<rt>ちみもうりょう</rt></ruby> Okey-Dokey!)</span><br>
</div>

<div class="section">
<ruby>出<rt>で</rt></ruby>る<ruby>杭<rt>くい</rt></ruby><ruby>打<rt>う</rt></ruby>たれる<ruby>前<rt>まえ</rt></ruby>に<ruby>飛<rt>と</rt></ruby>び<ruby>出<rt>だ</rt></ruby>して<br>
お<ruby>前<rt>まえ</rt></ruby>ごと<ruby>貫<rt>つらぬ</rt></ruby>いてやる<br>
</div>

<div class="section">
GRINNING PANDEMONIUM<br>
エブリシング <ruby>木っ端微塵<rt>こっぱみじん</rt></ruby><br>
ランチキハッピーエンディング<br>
<ruby>左<rt>ひだり</rt></ruby>うちわで<ruby>世<rt>よ</rt></ruby>にも<ruby>恐<rt>おそ</rt></ruby>ろしい<br>
<ruby>花道<rt>はなみち</rt></ruby>が<ruby>開<rt>ひら</rt></ruby>く<br>
<span class="w">(Warning! Warning!)</span><br>
<ruby>阿修羅<rt>あしゅら</rt></ruby>の<ruby>僕<rt>ぼく</rt></ruby>で<ruby>出迎<rt>でむか</rt></ruby>えよう<br>
<span class="w">(Welcome! Welcome! Welcome! Welcome!)</span><br>
</div>

<div class="section">
<ruby>毒<rt>どく</rt></ruby>をもって<ruby>毒<rt>どく</rt></ruby>を<ruby>制<rt>せい</rt></ruby>す デストロイ<br>
バカなフリしてステルスキル<br>
<ruby>寝言<rt>ねごと</rt></ruby>は<ruby>寝<rt>ね</rt></ruby>て<ruby>言<rt>い</rt></ruby>えって How many times?<br>
<ruby>地獄<rt>じごく</rt></ruby>へとご<ruby>案内<rt>あんない</rt></ruby>しま～～す！<br>
<span class="w">(<ruby>喧<rt>かしま</rt></ruby>シ<ruby>増<rt>ま</rt></ruby>シ<ruby>増<rt>ま</rt></ruby>シ Yummy! Yummy!)</span><br>
</div>

<div class="section">
<ruby>狂瀾怒濤<rt>きょうらんどとう</rt></ruby> <ruby>災害級<rt>さいがいきゅう</rt></ruby>のAmazing!<br>
<span class="w">(<ruby>奇怪千万<rt>きかいせんばん</rt></ruby> Loving! Loving!)</span><br>
そのツラごと キレッキレでフルボッコ<br>
アナーキー <ruby>片<rt>かた</rt></ruby>っ<ruby>端<rt>ぱし</rt></ruby>から<br>
</div>

<div class="section">
GRINNING PANDEMONIUM<br>
<ruby>命中<rt>めいちゅう</rt></ruby>1000パー リリック<ruby>極楽浄土<rt>ごくらくじょうど</rt></ruby>ミュージック<br>
<ruby>満<rt>み</rt></ruby>ち<ruby>満<rt>み</rt></ruby>ちてゆけ<br>
<ruby>喧喧諤諤<rt>けんけんがくがく</rt></ruby> オモシロオカシク<br>
<span class="w">(Making! Making!)</span><br>
ステージ<ruby>上<rt>じょう</rt></ruby>で<ruby>片<rt>かた</rt></ruby>をつけちゃって<br>
</div>

<div class="section">
<ruby>無難<rt>ぶなん</rt></ruby>ばっか<ruby>選<rt>えら</rt></ruby>ぶな <ruby>主導権<rt>しゅどうけん</rt></ruby>を<ruby>渡<rt>わた</rt></ruby>すな<br>
<ruby>期待<rt>きたい</rt></ruby>に<ruby>応<rt>こた</rt></ruby>えようとすんな<br>
<ruby>最低<rt>さいてい</rt></ruby>を<ruby>知<rt>し</rt></ruby>ってるからこそ<br>
<ruby>最高<rt>さいこう</rt></ruby>は<ruby>一層<rt>いっそう</rt></ruby><ruby>輝<rt>かがや</rt></ruby>いて<ruby>財産<rt>ざいさん</rt></ruby>になって<br>
</div>

<div class="section">
GRINNING PANDEMONIUM<br>
<ruby>僕<rt>ぼく</rt></ruby>だけのLove &amp; Peace<br>
<ruby>昇華<rt>しょうか</rt></ruby>してマスターピース お<ruby>味<rt>あじ</rt></ruby>はいかが？<br>
<ruby>塵<rt>ちり</rt></ruby>も<ruby>積<rt>つ</rt></ruby>もれば<ruby>山<rt>やま</rt></ruby>となるとき<br>
<span class="w">(Breaking! Breaking!)</span><br>
もっとヤベー<ruby>姿<rt>すがた</rt></ruby>をお<ruby>披露目<rt>ひろめ</rt></ruby><br>
</div>

<div class="section">
GRINNING PANDEMONIUM<br>
<ruby>歪<rt>ゆがみ</rt></ruby>も<ruby>芸術品<rt>げいじゅつひん</rt></ruby><br>
はみ<ruby>出<rt>だ</rt></ruby>してファンタスティック<br>
<ruby>始<rt>はじ</rt></ruby>めたもん<ruby>勝<rt>が</rt></ruby>ち<br>
<ruby>生<rt>う</rt></ruby>まれも<ruby>育<rt>そだ</rt></ruby>ちも<ruby>胸<rt>むね</rt></ruby><ruby>張<rt>は</rt></ruby>って<ruby>明日<rt>あした</rt></ruby>へ<br>
<span class="w">(Darling! Darling!)</span><br>
またいつでも<ruby>遊<rt>あそ</rt></ruby>んでアゲル<br>
</div>
`
  },
  {
    id: "shakunetsu-bonfire",
    title: "灼熱 bonfire",
    bpm: 155,
    duration: 225,
    html: `
<div class="section">
Hey! Hey! Go! Go! Go!<br>
Bang! Bang! Shout! Shout! Shout!<br>
Hey! Hey! Raise! Raise! Raise!<br>
Bang! Bang! Once more again!<br>
<span class="w">(<ruby>最強<rt>さいきょう</rt></ruby> revolution <ruby>掲<rt>かか</rt></ruby>げろ manifest!)</span><br>
<span class="w">(Bang and shout! Hurry, hurry up!)</span><br>
<ruby>灼熱<rt>しゃくねつ</rt></ruby> bonfire!<br>
</div>

<div class="section">
<ruby>波風<rt>なみかぜ</rt></ruby>なんか<ruby>立<rt>た</rt></ruby>てないで<ruby>忍<rt>しのび</rt></ruby><ruby>足<rt>あし</rt></ruby>? なんて<br>
<ruby>笑<rt>わら</rt></ruby>わせんなよ<br>
ド<ruby>派手<rt>はで</rt></ruby>にダイブしちゃったら?<br>
<ruby>楽園<rt>らくえん</rt></ruby>の<ruby>女神<rt>めがみ</rt></ruby>が<ruby>目覚<rt>めざ</rt></ruby>める<ruby>時間<rt>じかん</rt></ruby>だ<br>
</div>

<div class="section">
<span class="w">Will challenge it</span>  <ruby>花火<rt>はなび</rt></ruby>のような<br>
<span class="w">Will challenge it</span>  <ruby>大空<rt>おおぞら</rt></ruby>に<ruby>咲<rt>さ</rt></ruby>く<br>
<ruby>灼熱<rt>しゃくねつ</rt></ruby>の beat を <ruby>今<rt>いま</rt></ruby><ruby>燃<rt>も</rt></ruby>やしに<ruby>行<rt>い</rt></ruby>こう!<br>
</div>

<div class="section">
Party lighting!<br>
<ruby>最強<rt>さいきょう</rt></ruby>な vibes で <ruby>最強<rt>さいきょう</rt></ruby>な fantastic<br>
<ruby>方程式<rt>ほうていしき</rt></ruby>にない revolution<br>
<span class="w"><ruby>止<rt>と</rt></ruby>まらない <ruby>誰<rt>だれ</rt></ruby>も</span>   <ruby>止<rt>と</rt></ruby>められやしない<br>
<span class="w">どんどん <ruby>強<rt>つよ</rt></ruby>く</span>   <ruby>痺<rt>しび</rt></ruby>れるんだ<br>
<ruby>最強<rt>さいきょう</rt></ruby>に hot な <ruby>最強<rt>さいきょう</rt></ruby>はこれから<br>
<ruby>通過点<rt>つうかてん</rt></ruby>に<ruby>過<rt>す</rt></ruby>ぎないんだから<br>
<span class="w"><ruby>止<rt>と</rt></ruby>まらない <ruby>誰<rt>だれ</rt></ruby>も</span>  <ruby>止<rt>と</rt></ruby>められやしない<br>
<span class="w">まだまだ いける</span>  <ruby>不可能<rt>ふかのう</rt></ruby>なんて<br>
No, no! <ruby>真夏<rt>まなつ</rt></ruby>の<ruby>本気<rt>ほんき</rt></ruby><br>
ギラギラかましてやろう<br>
<ruby>夢<rt>ゆめ</rt></ruby>が<ruby>飼<rt>か</rt></ruby>う<ruby>現実<rt>げんじつ</rt></ruby>へ feed in<br>
</div>

<div class="section">
「もしも」「それじゃ」「どうしよう」<br>
あ～あぁ ネガティブオーラ<br>
<ruby>出<rt>だ</rt></ruby>すんじゃないよ<br>
たまには<ruby>脳<rt>のう</rt></ruby>も<ruby>空<rt>から</rt></ruby>っぽにしなきゃ<br>
<ruby>美味<rt>うま</rt></ruby>いもんも<ruby>詰<rt>つ</rt></ruby>め<ruby>込<rt>こ</rt></ruby>めなくなる<br>
</div>

<div class="section">
<span class="w">Will challenge it</span>  <ruby>一発<rt>いっぱつ</rt></ruby><ruby>鳴<rt>な</rt></ruby>らせ<br>
<span class="w">Will challenge it</span>  <ruby>油断<rt>ゆだん</rt></ruby>の<ruby>隙<rt>すき</rt></ruby>に<br>
<ruby>容赦<rt>ようしゃ</rt></ruby>しない <ruby>連続<rt>れんぞく</rt></ruby><ruby>打<rt>う</rt></ruby>ち<ruby>上<rt>あ</rt></ruby>げてやろう<br>
</div>

<div class="section">
Party lighting!<br>
<ruby>最強<rt>さいきょう</rt></ruby>な mental で <ruby>最強<rt>さいきょう</rt></ruby>な action で<br>
ベクトルじゃ<ruby>追<rt>お</rt></ruby>えない speed<br>
<span class="w"><ruby>止<rt>と</rt></ruby>まらない <ruby>誰<rt>だれ</rt></ruby>も</span> <ruby>止<rt>と</rt></ruby>められやしない<br>
<span class="w">ガンガン トバせ</span> <ruby>強引<rt>ごういん</rt></ruby>にでも<br>
<ruby>最強<rt>さいきょう</rt></ruby>な soul で <ruby>最強<rt>さいきょう</rt></ruby>を<ruby>超<rt>こ</rt></ruby>えてく<br>
<ruby>浴<rt>あ</rt></ruby>びるほど <ruby>汗<rt>あせ</rt></ruby>に<ruby>溺<rt>おぼ</rt></ruby>れろ<br>
<span class="w"><ruby>止<rt>と</rt></ruby>まらない <ruby>誰<rt>だれ</rt></ruby>も</span> <ruby>止<rt>と</rt></ruby>められやしない<br>
<span class="w">もっともっと いける</span> <ruby>傍観者<rt>ぼうかんしゃ</rt></ruby>には<br>
No, no! <ruby>食<rt>く</rt></ruby>らいついてこい<br>
その<ruby>体<rt>からだ</rt></ruby>に<ruby>棲<rt>す</rt></ruby>みついて<br>
<ruby>離<rt>はな</rt></ruby>さない <ruby>洗脳<rt>せんのう</rt></ruby> reflection<br>
</div>

<div class="section">
<ruby>最強<rt>さいきょう</rt></ruby>な<ruby>僕<rt>ぼく</rt></ruby>らで <ruby>最強<rt>さいきょう</rt></ruby>を<ruby>制<rt>せい</rt></ruby>して<br>
<ruby>方程式<rt>ほうていしき</rt></ruby>にない revolution<br>
<span class="w"><ruby>止<rt>と</rt></ruby>まらない <ruby>誰<rt>だれ</rt></ruby>も</span>   <ruby>止<rt>と</rt></ruby>められやしない<br>
<span class="w">どんどん <ruby>強<rt>つよ</rt></ruby>く</span>   <ruby>痺<rt>しび</rt></ruby>れるんだ<br>
<ruby>最強<rt>さいきょう</rt></ruby>に hot な <ruby>最強<rt>さいきょう</rt></ruby>はこれから<br>
<ruby>通過点<rt>つうかてん</rt></ruby>に<ruby>過<rt>す</rt></ruby>ぎないんだから<br>
<span class="w"><ruby>止<rt>と</rt></ruby>まらない <ruby>誰<rt>だれ</rt></ruby>も</span>  <ruby>止<rt>と</rt></ruby>められやしない<br>
<span class="w">まだまだ いける</span>  <ruby>不可能<rt>ふかのう</rt></ruby>なんて<br>
No, no! <ruby>真夏<rt>まなつ</rt></ruby>の<ruby>本気<rt>ほんき</rt></ruby><br>
ギラギラかましてやろう<br>
<ruby>夢<rt>ゆめ</rt></ruby>が<ruby>飼<rt>か</rt></ruby>う<ruby>今<rt>いま</rt></ruby>こそ bonfire!<br>
</div>
`
  },
  {
    id: "fight-addict",
    title: "'FIGHT' ADDICT",
    bpm: 195,
    duration: 231,
    html: `
<div class="section">
ゼロからイチヘ<br>
<ruby>目<rt>め</rt></ruby><ruby>醒<rt>ざ</rt></ruby>めた<ruby>可能性<rt>かのうせい</rt></ruby>が <ruby>僕<rt>ぼく</rt></ruby>をどこまでも<ruby>解<rt>と</rt></ruby>き<ruby>放<rt>はな</rt></ruby>つ<br>
</div>

<div class="section">
<span class="w">(Stand up! <ruby>血<rt>ち</rt></ruby><ruby>湧<rt>わ</rt></ruby>き<ruby>肉<rt>にく</rt></ruby><ruby>躍<rt>おど</rt></ruby>る Vroom! Vroom!)</span><br>
<span class="w">(It's my turn! <ruby>奇跡<rt>きせき</rt></ruby>を<ruby>起<rt>お</rt></ruby>こしてゆく Vroom! Vroom!)</span><br>
</div>

<div class="section">
いつだって<ruby>大博打<rt>おおばくち</rt></ruby> <ruby>自分<rt>じぶん</rt></ruby><ruby>自身<rt>じしん</rt></ruby>をオールイン<br>
アクセル<ruby>踏<rt>ふ</rt></ruby>みっぱなしで ぶっ<ruby>壊<rt>こわ</rt></ruby>れたブレーキ<br>
</div>

<div class="section">
<span class="w">(<ruby>澱<rt>よど</rt></ruby>みのない 'FIGHT' ADDICT)</span><br>
<span class="w">(<ruby>自信<rt>じしん</rt></ruby>を<ruby>抱<rt>いだ</rt></ruby>き 'FIGHT' ADDICT)</span><br>
<ruby>心<rt>こころ</rt></ruby>に<ruby>決<rt>き</rt></ruby>めた<ruby>生<rt>い</rt></ruby>き<ruby>様<rt>ざま</rt></ruby> <ruby>全開<rt>ぜんかい</rt></ruby>で<ruby>鳴<rt>な</rt></ruby>らして<br>
</div>

<div class="section">
ゾクゾク<ruby>痺<rt>しび</rt></ruby>れる <ruby>自分<rt>じぶん</rt></ruby>がますます<ruby>強<rt>つよ</rt></ruby>くなってく<ruby>感覚<rt>かんかく</rt></ruby><br>
<ruby>失敗<rt>しっぱい</rt></ruby>を<ruby>恐<rt>おそ</rt></ruby>れるよりも <ruby>直感<rt>ちょっかん</rt></ruby>を<ruby>信<rt>しん</rt></ruby>じてたい<br>
ギアをさらに<ruby>上<rt>あ</rt></ruby>げて<br>
</div>

<div class="section">
ぶちかませ あの<ruby>手<rt>て</rt></ruby>この<ruby>手<rt>て</rt></ruby>で <ruby>無限大<rt>むげんだい</rt></ruby>の<ruby>戦略<rt>せんりゃく</rt></ruby>で<br>
<ruby>運命<rt>うんめい</rt></ruby>は<ruby>変<rt>か</rt></ruby>えるためにあるもの<br>
<span class="w">(Step it up, rise so high)</span><br>
<ruby>尽<rt>つ</rt></ruby>きない<ruby>勝利<rt>しょうり</rt></ruby>への<ruby>渇望<rt>かつぼう</rt></ruby>で <ruby>魂<rt>たましい</rt></ruby><ruby>焦<rt>こ</rt></ruby>がして<br>
<ruby>僕<rt>ぼく</rt></ruby>は<ruby>僕<rt>ぼく</rt></ruby><ruby>自身<rt>じしん</rt></ruby>で <span class="w">(time to fight!)</span><br>
<ruby>僕<rt>ぼく</rt></ruby>を<ruby>導<rt>みちび</rt></ruby>いてく <span class="w">(time to fight!)</span><br>
<ruby>手<rt>て</rt></ruby>を<ruby>伸<rt>の</rt></ruby>ばし<ruby>続<rt>つづ</rt></ruby>けて <span class="w">(three, two, one!)</span><br>
<ruby>突<rt>つ</rt></ruby>き<ruby>進<rt>すす</rt></ruby>むまで<br>
</div>

<div class="section">
<ruby>衝撃<rt>しょうげき</rt></ruby>の<ruby>出逢<rt>であ</rt></ruby>い <ruby>本気<rt>ほんき</rt></ruby>の<ruby>自分<rt>じぶん</rt></ruby>を<ruby>味<rt>あじ</rt></ruby>わい<br>
<ruby>忘<rt>わす</rt></ruby>れらんない<ruby>光<rt>ひかり</rt></ruby>の<ruby>眩<rt>まぶ</rt></ruby>しさ <ruby>根付<rt>ねづ</rt></ruby>く<ruby>胸<rt>むね</rt></ruby>に<br>
</div>

<div class="section">
<span class="w">(<ruby>鬼<rt>おに</rt></ruby>さんコチラ 'FIGHT' ADDICT)</span><br>
<span class="w">(<ruby>手<rt>て</rt></ruby>の<ruby>鳴<rt>な</rt></ruby>る<ruby>方<rt>ほう</rt></ruby>へ 'FIGHT' ADDICT)</span><br>
<ruby>誰<rt>だれ</rt></ruby>よりも<ruby>楽<rt>たの</rt></ruby>しんでられる <ruby>自信<rt>じしん</rt></ruby>しかなくて<br>
</div>

<div class="section">
ハタから<ruby>見<rt>み</rt></ruby>れば<ruby>不正解<rt>ふせいかい</rt></ruby>だって<ruby>構<rt>かま</rt></ruby>いやしないさ<br>
<ruby>不安<rt>ふあん</rt></ruby>も<ruby>迷<rt>まよ</rt></ruby>いもヘイトも <ruby>野心<rt>やしん</rt></ruby>に<ruby>火<rt>ひ</rt></ruby>を<ruby>放<rt>はな</rt></ruby>てば<br>
<ruby>消<rt>け</rt></ruby>し<ruby>炭<rt>ずみ</rt></ruby>に<ruby>成<rt>な</rt></ruby>り<ruby>代<rt>か</rt></ruby>わる<br>
</div>

<div class="section">
ぶちかませ <ruby>勝負<rt>しょうぶ</rt></ruby>の<ruby>醍醐味<rt>だいごみ</rt></ruby> <ruby>美味<rt>おい</rt></ruby>しく<ruby>平<rt>たい</rt></ruby>らげ<br>
<ruby>冴<rt>さ</rt></ruby>え<ruby>渡<rt>わた</rt></ruby>ってく <ruby>想像<rt>そうぞう</rt></ruby>の<ruby>向<rt>む</rt></ruby>こうへ<br>
<span class="w">(Light it up, break the dark)</span><br>
<ruby>乗<rt>の</rt></ruby>り<ruby>越<rt>こ</rt></ruby>えろ <ruby>重<rt>かさ</rt></ruby>ねた<ruby>勝利<rt>しょうり</rt></ruby>を<ruby>足<rt>あし</rt></ruby><ruby>掛<rt>が</rt></ruby>かりにして<br>
どんな<ruby>高<rt>たか</rt></ruby>い<ruby>壁<rt>かべ</rt></ruby>も <span class="w">(time to fight!)</span><br>
どんな<ruby>深<rt>ふか</rt></ruby>い<ruby>闇<rt>やみ</rt></ruby>も <span class="w">(time to fight!)</span><br>
ざけんなって<ruby>大声<rt>おおごえ</rt></ruby>で <span class="w">(three, two, one!)</span><br>
<ruby>笑<rt>わら</rt></ruby>い<ruby>合<rt>あ</rt></ruby>いながら<br>
</div>

<div class="section">
<span class="w">(<ruby>負<rt>ま</rt></ruby>けず<ruby>嫌<rt>ぎら</rt></ruby>い <ruby>火花<rt>ひばな</rt></ruby>バチバチ)</span> Vroom! Vroom!<br>
<span class="w">(<ruby>飢<rt>う</rt></ruby>えた<ruby>獣<rt>けもの</rt></ruby>のようにマジガチ)</span> Vroom! Vroom!<br>
<span class="w">(<ruby>無邪気<rt>むじゃき</rt></ruby>こそ<ruby>最大<rt>さいだい</rt></ruby>の<ruby>武器<rt>ぶき</rt></ruby><ruby>勝<rt>が</rt></ruby>ち)</span> Vroom! Vroom!<br>
<span class="w">(<ruby>仕留<rt>しと</rt></ruby>めるまで<ruby>終<rt>お</rt></ruby>わらないfighting)</span> Vroom! Vroom!<br>
</div>

<div class="section">
ゼロからイチヘ<br>
<ruby>目<rt>め</rt></ruby><ruby>醒<rt>ざ</rt></ruby>めた<ruby>可能性<rt>かのうせい</rt></ruby>を<ruby>咀嚼<rt>そしゃく</rt></ruby>して<br>
<ruby>明日<rt>あした</rt></ruby>へ<ruby>明後日<rt>あさって</rt></ruby>と<ruby>超<rt>こ</rt></ruby>えてく<br>
<ruby>限界<rt>げんかい</rt></ruby>なんてないんだと<br>
<ruby>知<rt>し</rt></ruby>らしめながら go now<br>
</div>

<div class="section">
ぶちかませ あの<ruby>手<rt>て</rt></ruby>この<ruby>手<rt>て</rt></ruby>で <ruby>無限大<rt>むげんだい</rt></ruby>の<ruby>戦略<rt>せんりゃく</rt></ruby>で<br>
<ruby>運命<rt>うんめい</rt></ruby>は<ruby>変<rt>か</rt></ruby>えるためにあるもの<br>
<span class="w">(Step it up, rise so high)</span><br>
<ruby>尽<rt>つ</rt></ruby>きない<ruby>勝利<rt>しょうり</rt></ruby>への<ruby>渇望<rt>かつぼう</rt></ruby>で <ruby>魂<rt>たましい</rt></ruby><ruby>焦<rt>こ</rt></ruby>がして<br>
<ruby>僕<rt>ぼく</rt></ruby>は<ruby>僕<rt>ぼく</rt></ruby><ruby>自身<rt>じしん</rt></ruby>で <span class="w">(time to fight!)</span><br>
<ruby>僕<rt>ぼく</rt></ruby>を<ruby>導<rt>みちび</rt></ruby>いてく <span class="w">(time to fight!)</span><br>
<ruby>手<rt>て</rt></ruby>を<ruby>伸<rt>の</rt></ruby>ばし<ruby>続<rt>つづ</rt></ruby>けて <span class="w">(three, two, one!)</span><br>
<ruby>突<rt>つ</rt></ruby>き<ruby>進<rt>すす</rt></ruby>むまで<br>
<span class="w">(Stand up! <ruby>血<rt>ち</rt></ruby><ruby>湧<rt>わ</rt></ruby>き<ruby>肉<rt>にく</rt></ruby><ruby>躍<rt>おど</rt></ruby>る Vroom! Vroom!)</span><br>
<span class="w">(It's my turn! <ruby>奇跡<rt>きせき</rt></ruby>を<ruby>起<rt>お</rt></ruby>こしてゆく Vroom! Vroom!)</span><br>
</div>
`
  },
  {
    id: "invincible-fighter",
    title: "Invincible Fighter",
    bpm: 99,
    duration: 251,
    html: `
<div class="section">
<span class="w">(Wakeup call！)</span><br>
<span class="w">(<ruby>挑戦状<rt>ちょうせんじょう</rt></ruby><ruby>叩<rt>たた</rt></ruby>きつけ <ruby>奪<rt>うば</rt></ruby>い<ruby>返<rt>かえ</rt></ruby>すまでさ)</span><br>
<ruby>信<rt>しん</rt></ruby>じたもの<ruby>全<rt>すべ</rt></ruby>てを、<ruby>己<rt>おのれ</rt></ruby>の<ruby>明日<rt>あした</rt></ruby>を<br>
</div>

<div class="section">
<ruby>這<rt>は</rt></ruby>い<ruby>上<rt>あ</rt></ruby>がれ Stand up <ruby>必<rt>かなら</rt></ruby>ず<br>
<ruby>非常<rt>ひじょう</rt></ruby><ruby>事態<rt>じたい</rt></ruby>こそ<ruby>沸<rt>わ</rt></ruby>き<ruby>立<rt>た</rt></ruby>つ<ruby>温度<rt>おんど</rt></ruby><br>
やられっぱなしは アリエナイ<br>
Can't get enough！Can't get enough！<br>
<ruby>絶好<rt>ぜっこう</rt></ruby>の Chance は<ruby>逃<rt>のが</rt></ruby>すな Alright？<br>
</div>

<div class="section">
<span class="w">(<ruby>不可能<rt>ふかのう</rt></ruby>は<ruby>一切<rt>いっさい</rt></ruby><ruby>潰<rt>つぶ</rt></ruby>せ)</span><br>
<ruby>何千回<rt>なんぜんかい</rt></ruby> <ruby>何万回<rt>なんまんかい</rt></ruby> <ruby>何億回<rt>なんおくかい</rt></ruby>でも<br>
<span class="w">(<ruby>実情<rt>じつじょう</rt></ruby>の<ruby>声<rt>こえ</rt></ruby>で)</span> Imageを<ruby>走<rt>はし</rt></ruby>れ<br>
Get back！Get back！Get back！Get back！<br>
Have a match！！！<br>
</div>

<div class="section">
Wakeup call！<br>
<ruby>先導<rt>せんどう</rt></ruby>せよ<ruby>光<rt>ひかり</rt></ruby>を <ruby>揺<rt>ゆ</rt></ruby>るがない<ruby>姿<rt>すがた</rt></ruby>で<br>
<ruby>真<rt>ま</rt></ruby>っ<ruby>向<rt>こう</rt></ruby><ruby>勝負<rt>しょうぶ</rt></ruby>でもっと Play hard！<span class="w">(<ruby>道<rt>みち</rt></ruby>を<ruby>切<rt>き</rt></ruby>り<ruby>開<rt>ひら</rt></ruby>け)</span><br>
Fight with ココロと Fight with カラダで<br>
<ruby>最高<rt>さいこう</rt></ruby>の<ruby>瞬間<rt>しゅんかん</rt></ruby>を Ever… <ruby>勝利<rt>しょうり</rt></ruby>の<ruby>旗<rt>はた</rt></ruby>を<ruby>振<rt>ふ</rt></ruby>れ！<br>
</div>

<div class="section">
<ruby>切<rt>き</rt></ruby>り<ruby>捨<rt>す</rt></ruby>てろ Shake it <ruby>弱<rt>よわ</rt></ruby>さを<br>
<ruby>指先<rt>ゆびさき</rt></ruby>に<ruby>散<rt>ち</rt></ruby>らした Vital で<br>
<ruby>敗北<rt>はいぼく</rt></ruby>は<ruby>論外<rt>ろんがい</rt></ruby>だね Anytime<br>
On your mark！On your mark！<br>
<ruby>全方位<rt>ぜんほうい</rt></ruby> Noise を<ruby>見<rt>み</rt></ruby><ruby>破<rt>やぶ</rt></ruby>れ Alright？<br>
</div>

<div class="section">
<span class="w">(<ruby>迎<rt>むか</rt></ruby>え<ruby>撃<rt>う</rt></ruby>て <ruby>残<rt>のこ</rt></ruby>らず)</span><br>
<ruby>何千回<rt>なんぜんかい</rt></ruby> <ruby>何万回<rt>なんまんかい</rt></ruby> <ruby>何億回<rt>なんおくかい</rt></ruby>でも<br>
<span class="w">(<ruby>本能<rt>ほんのう</rt></ruby>を<ruby>齧<rt>かじ</rt></ruby>り)</span> Image を<ruby>抱<rt>いだ</rt></ruby>け<br>
Get back！Get back！Get back！Get back！<br>
Have a match！！！<br>
</div>

<div class="section">
Grab your chance！<br>
<ruby>先導<rt>せんどう</rt></ruby>せよ<ruby>闇<rt>やみ</rt></ruby>をも <ruby>惑<rt>まど</rt></ruby>わされず <ruby>強<rt>つよ</rt></ruby>く<br>
<ruby>最強<rt>さいきょう</rt></ruby>の<ruby>切<rt>き</rt></ruby>り<ruby>札<rt>ふだ</rt></ruby> Take that！<span class="w">(<ruby>道<rt>みち</rt></ruby>を<ruby>探<rt>さが</rt></ruby>し<ruby>出<rt>だ</rt></ruby>せ)</span><br>
Fight with ココロと Fight with カラダで<br>
<ruby>限界<rt>げんかい</rt></ruby>を<ruby>超<rt>こ</rt></ruby>えて Ever… <ruby>勝利<rt>しょうり</rt></ruby>の<ruby>旗<rt>はた</rt></ruby>を<ruby>振<rt>ふ</rt></ruby>れ！<br>
</div>

<div class="section">
<span class="w">(<ruby>譲<rt>ゆず</rt></ruby>らない<ruby>言葉<rt>ことば</rt></ruby>が)</span><br>
<ruby>何千回<rt>なんぜんかい</rt></ruby> <ruby>何万回<rt>なんまんかい</rt></ruby> <ruby>何億回<rt>なんおくかい</rt></ruby>でも<br>
<span class="w">(<ruby>火花<rt>ひばな</rt></ruby>を<ruby>纏<rt>まと</rt></ruby>い)</span> Image を<ruby>呼<rt>よ</rt></ruby>んで<br>
Get back！Get back！Get back！Get back！<br>
Have a match！！！<br>
</div>

<div class="section">
Wakeup call！<br>
<ruby>挑戦状<rt>ちょうせんじょう</rt></ruby><ruby>叩<rt>たた</rt></ruby>きつけ <ruby>奪<rt>うば</rt></ruby>い<ruby>返<rt>かえ</rt></ruby>すまでさ<br>
<ruby>信<rt>しん</rt></ruby>じたもの<ruby>全<rt>すべ</rt></ruby>てを、<br>
</div>

<div class="section">
<span class="w">(<ruby>己<rt>おのれ</rt></ruby>の<ruby>信実<rt>しんじつ</rt></ruby>を)</span><br>
</div>

<div class="section">
「Invincible Fighter」<br>
</div>

<div class="section">
Wakeup call！<br>
<ruby>先導<rt>せんどう</rt></ruby>せよ<ruby>光<rt>ひかり</rt></ruby>を <ruby>揺<rt>ゆ</rt></ruby>るがない<ruby>姿<rt>すがた</rt></ruby>で<br>
<ruby>真<rt>ま</rt></ruby>っ<ruby>向<rt>こう</rt></ruby><ruby>勝負<rt>しょうぶ</rt></ruby>でもっと Play hard！<span class="w">(<ruby>道<rt>みち</rt></ruby>を<ruby>切<rt>き</rt></ruby>り<ruby>開<rt>ひら</rt></ruby>け)</span><br>
Fight with ココロと Fight with カラダで<br>
<ruby>最高<rt>さいこう</rt></ruby>の<ruby>瞬間<rt>しゅんかん</rt></ruby>を Ever… <ruby>勝利<rt>しょうり</rt></ruby>の<ruby>旗<rt>はた</rt></ruby>を<ruby>振<rt>ふ</rt></ruby>れ！<br>
</div>
`
  },
  {
    id: "howling-ambition",
    title: "HOWLING AMBITION",
    bpm: 136,
    duration: 258,
    html: `
<div class="section">
<span class="w">Still not enough！</span>Still not enough！<br>
<span class="w">Still not enough！</span>Still not enough！<br>
<span class="w">Still not enough！</span>Still not enough！<br>
<span class="w">Still not enough！</span>Still not enough！<br>
</div>

<div class="section">
Watch out！ <ruby>喰<rt>く</rt></ruby>うか<ruby>喰<rt>く</rt></ruby>われるか<br>
<ruby>本能<rt>ほんのう</rt></ruby>が<ruby>叩<rt>たた</rt></ruby>き<ruby>出<rt>だ</rt></ruby>すアンサーで Shout！ <ruby>堂々<rt>どうどう</rt></ruby><ruby>歌<rt>うた</rt></ruby>うのさ<br>
<span class="w">(Let's hang out！)</span><ruby>抑<rt>おさ</rt></ruby>えきれない<br>
<span class="w">(Let's hang out！)</span><ruby>譲<rt>ゆず</rt></ruby>らない<br>
<ruby>殴<rt>なぐ</rt></ruby>り<ruby>合<rt>あ</rt></ruby>おうぜ <ruby>音楽<rt>おんがく</rt></ruby>で<br>
</div>

<div class="section">
<span class="w"><ruby>挑発<rt>ちょうはつ</rt></ruby>ノって<ruby>乗<rt>の</rt></ruby>りこなしちゃって</span><br>
<span class="w"><ruby>何度<rt>なんど</rt></ruby>だって<ruby>超越<rt>ちょうえつ</rt></ruby> (Bash, bash)</span><br>
<span class="w"><ruby>遺伝子<rt>いでんし</rt></ruby>レベルで <ruby>匂<rt>にお</rt></ruby>わせちゃって</span><br>
<span class="w">クレイジーな<ruby>人生<rt>じんせい</rt></ruby> (Bash, bash)</span><br>
Blast！Blast！Blast！Give me more！<br>
Blast！Blast！Blast！Give me more！<br>
Blast！<span class="w">Rat-a-tat！</span><br>
Blast！Blast！<span class="w">Rat-a-tat！</span>Give me more！<br>
Blast！<span class="w">Rat-a-tat！</span>Blast！<span class="w">Rat-a-tat！</span>Blast！<span class="w">Rat-a-tat！</span><br>
</div>

<div class="section">
I'm No.1！！<span class="w">(Hi！！)</span>I'm No.1！！<span class="w">(Hi！！)</span><br>
<ruby>有無<rt>うむ</rt></ruby>を<ruby>言<rt>い</rt></ruby>わせない<ruby>輝<rt>かがや</rt></ruby>きで <span class="w">(C'mon！)</span><br>
I'm No.1！！<span class="w">(Hi！！)</span>I'm No.1！！<span class="w">(Hi！！)</span><br>
ステージ <ruby>視線<rt>しせん</rt></ruby> <ruby>心<rt>こころ</rt></ruby> <ruby>奪<rt>うば</rt></ruby>い<ruby>尽<rt>つ</rt></ruby>くして<br>
<span class="w">(Wow wo wow) Bring the heat, Feel the beat</span><br>
<span class="w">(Wow wo wow)</span> <ruby>思<rt>おも</rt></ruby>い<ruby>知<rt>し</rt></ruby>らせろ<br>
<span class="w">(Wow wo wow)</span> <ruby>己<rt>おのれ</rt></ruby>そのものを<br>
Complete freedom <span class="w">(Hi！！)</span> Over the world <span class="w">(Hi！！)</span><br>
No.1！！<br>
</div>

<div class="section">
Watch out！ <ruby>最強<rt>さいきょう</rt></ruby>で<ruby>最高<rt>さいこう</rt></ruby>ってそんなのは<ruby>当<rt>あ</rt></ruby>たり<ruby>前<rt>まえ</rt></ruby><br>
くれてやるさ お<ruby>望<rt>のぞ</rt></ruby>みならば<br>
<span class="w">(Let's hang out！)</span><ruby>尽<rt>つ</rt></ruby>きない<br>
<span class="w">(Let's hang out！)</span><ruby>朽<rt>く</rt></ruby>ちない<br>
<ruby>殴<rt>なぐ</rt></ruby>り<ruby>合<rt>あ</rt></ruby>おうぜ <ruby>音楽<rt>おんがく</rt></ruby>で<br>
</div>

<div class="section">
<span class="w"><ruby>何処<rt>どこ</rt></ruby>までだって<ruby>行<rt>い</rt></ruby>けちゃうんだって</span><br>
<span class="w"><ruby>堪<rt>たま</rt></ruby>んねーな<ruby>運命<rt>うんめい</rt></ruby> (Bash, bash)</span><br>
<span class="w"><ruby>喰<rt>く</rt></ruby>っちゃ<ruby>歌<rt>うた</rt></ruby>って<ruby>喰<rt>く</rt></ruby>っちゃ<ruby>歌<rt>うた</rt></ruby>って</span><br>
<span class="w">いつの<ruby>間<rt>ま</rt></ruby>にか<ruby>天辺<rt>てっぺん</rt></ruby> (Bash, bash)</span><br>
Blast！Blast！Blast！Give me more！<br>
Blast！Blast！Blast！Give me more！<br>
Blast！<span class="w">Rat-a-tat！</span><br>
Blast！Blast！<span class="w">Rat-a-tat！</span>Give me more！<br>
Blast！<span class="w">Rat-a-tat！</span>Blast！<span class="w">Rat-a-tat！</span>Blast！<span class="w">Rat-a-tat！</span><br>
</div>

<div class="section">
I'm No.1！！<span class="w">(Hi！！)</span>I'm No.1！！<span class="w">(Hi！！)</span><br>
<ruby>打<rt>う</rt></ruby>てば<ruby>響<rt>ひび</rt></ruby>く この<ruby>愉快<rt>ゆかい</rt></ruby>さで <span class="w">(C'mon！)</span><br>
I'm No.1！！<span class="w">(Hi！！)</span>I'm No.1！！<span class="w">(Hi！！)</span><br>
<ruby>嫌<rt>いや</rt></ruby>と<ruby>言<rt>い</rt></ruby>うほど <ruby>存在<rt>そんざい</rt></ruby>を<ruby>示<rt>しめ</rt></ruby>して<br>
<span class="w">(Wow wo wow) Give it all you've got</span><br>
<span class="w">(Wow wo wow)</span> <ruby>誰<rt>だれ</rt></ruby>よりも<ruby>強<rt>つよ</rt></ruby>く<br>
<span class="w">(Wow wo wow)</span> <ruby>思<rt>おも</rt></ruby>う<ruby>存分<rt>ぞんぶん</rt></ruby><br>
Complete freedom <span class="w">(Hi！！)</span> Over the world <span class="w">(Hi！！)</span><br>
No.1！！<br>
</div>

<div class="section">
Rat-a-tat…<br>
<span class="w">もっと<ruby>寄越<rt>よこ</rt></ruby>せよ <ruby>言葉<rt>ことば</rt></ruby>よりも<ruby>雄弁<rt>ゆうべん</rt></ruby>な<ruby>音<rt>おと</rt></ruby></span><br>
Listen up！<br>
<span class="w"><ruby>飾<rt>かざ</rt></ruby>んなくても<ruby>生身<rt>なまみ</rt></ruby>でブランド <ruby>必聴<rt>ひっちょう</rt></ruby>の<ruby>衝動<rt>しょうどう</rt></ruby></span><br>
Listen up！<br>
</div>

<div class="section">
I'm No.1！！<span class="w">(Hi！！)</span>I'm No.1！！<span class="w">(Hi！！)</span><br>
<ruby>有無<rt>うむ</rt></ruby>を<ruby>言<rt>い</rt></ruby>わせない<ruby>輝<rt>かがや</rt></ruby>きで <span class="w">(C'mon！)</span><br>
I'm No.1！！<span class="w">(Hi！！)</span>I'm No.1！！<span class="w">(Hi！！)</span><br>
ステージ <ruby>視線<rt>しせん</rt></ruby> <ruby>心<rt>こころ</rt></ruby> <ruby>奪<rt>うば</rt></ruby>い<ruby>尽<rt>つ</rt></ruby>くして<br>
<span class="w">(Wow wo wow) Bring the heat, Feel the beat</span><br>
<span class="w">(Wow wo wow)</span> <ruby>思<rt>おも</rt></ruby>い<ruby>知<rt>し</rt></ruby>らせろ<br>
<span class="w">(Wow wo wow)</span> <ruby>己<rt>おのれ</rt></ruby>そのものを<br>
Complete freedom <span class="w">(Hi！！)</span> Over the world <span class="w">(Hi！！)</span><br>
No.1！！<br>
</div>

<div class="section">
<span class="w">Still not enough！</span>Still not enough！<br>
<span class="w">Still not enough！</span>Still not enough！<br>
<span class="w">Still not enough！</span>Still not enough！<br>
<span class="w">Still not enough！</span>Still not enough！<br>
</div>
`
  }
];
