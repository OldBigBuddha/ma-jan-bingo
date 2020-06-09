import React from "react";

export default () => {
  return(
    <div>
      <h2>麻雀役 dé BINGO の使い方</h2>
      <p>右側にある「作成」ボタンをクリックすれば左側に役ビンゴが出来上がります。和了った役のマスをクリックすると色が付きます。</p>
      <p>保存機能等は未実装です。そのうち実装するかも。</p>

      <dl>
        <h3>登録されている役</h3>
        <p>天和・地和・ローカル役は実装していません。ローカル役は気ままに追加していきます。</p>
        <dt>標準状態</dt>
        <dd>何もチェックをしていない状態で出てくる役一覧です。（順不同）</dd>
        <ul>
          <li>断么九</li>
          <li>役牌</li>
          <li>ドラ</li>
          <li>立直</li>
          <li>門前自摸</li>
          <li>平和</li>
          <li>一盃口</li>
          <li>七対子</li>
          <li>三色同順</li>
          <li>混全帯么九</li>
          <li>一気通貫</li>
          <li>対々和</li>
          <li>三暗刻</li>
          <li>三色同刻</li>
          <li>混老頭</li>
          <li>小三元</li>
          <li>三槓子</li>
          <li>混一色</li>
          <li>純全帯么九</li>
          <li>二盃口</li>
          <li>清一色</li>
        </ul>
        <dt>偶然役</dt>
        <dd>「偶然役」にチェックを入れると出てくる役です。（順不同）</dd>
        <ul>
          <li>槍槓</li>
          <li>嶺上開花</li>
          <li>海底撈月</li>
          <li>河底撈魚</li>
          <li>一発</li>
          <li>ダブル立直</li>
          <li>流し満貫</li>
        </ul>
        <dt>役満</dt>
        <dd>「役満」にチェックを入れると出てくる役です。（順不同）</dd>
        <ul>
          <li>緑一色</li>
          <li>大三元</li>
          <li>小四喜</li>
          <li>字一色</li>
          <li>清老頭</li>
          <li>四槓子</li>
          <li>国士無双</li>
          <li>九蓮宝燈</li>
          <li>四暗刻</li>
        </ul>
        <dt>ダブル役満</dt>
        <dd>「ダブル役満」にチェックを入れると出てくる役です。（順不同）</dd>
        <ul>
          <li>四暗刻単騎待ち</li>
          <li>大四喜</li>
          <li>国士無双13面待ち</li>
          <li>純正九蓮宝燈</li>
        </ul>
      </dl>
      <p>追加して欲しい役がありましたら<a href="https://twitter.com/OldBigBuddha">作成者</a>にDMかメンションかリプにてご連絡ください。</p>
    </div>
  )
}