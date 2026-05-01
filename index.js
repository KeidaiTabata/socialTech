const productList = [
    {
        imgSrc: "images/index/index-mantoman.png",
        cardTitle: "MAN TO MAN",
        cardCopy: "プログラミング教育",
        cardText: "2013年より日本で唯一の専属講師によるマンツーマンのプログラミングレッスンを開始。AI/人工知能やウェブデザインの学習も可能です。"
    },
    {
        imgSrc: "images/index/index-career.png",
        cardTitle: "CARRER",
        cardCopy: "人材紹介事業",
        cardText: "エンジニアへの転職に特化した履歴書や職務経歴書のアドバイスや面接対策を行い、豊富な求人の中から最適なキャリア選択を支援します。"
    },
    {
        imgSrc: "images/index/index-media.png",
        cardTitle: "MEDIA",
        cardCopy: "プログラミング学習メディア",
        cardText: "月間200万人に読まれる日本最大級のプログラミング学習サイト「SocialTech Blog」やYouTubeチャネルにて学習情報を発信しています。"
    },
    {
        imgSrc: "images/index/index-b2b.png",
        cardTitle: "B2B",
        cardCopy: "法人研修事業",
        cardText: "社員のスキルアップ・資格取得・福利厚生を目的としたプログラミング法人研修。貴社の事業モデルに合わせた研修内容の提案を致します。"
    }
]

let prodcutLeftContent = "";
let productRightContent = "";

productList.slice(0, 2).forEach(p => {
    prodcutLeftContent += `
                    <div>
                        <img class="product-photo" src="${p.imgSrc}" alt="PCでコードを書く男性">
                        <div class="product-explain">
                            <span>${p.cardTitle}</span>
                            <h3>${p.cardCopy}</h3>
                            <p>${p.cardText}</p>
                        </div>
                    </div>
            `
});

productList.slice(2, 4).forEach(p => {
    productRightContent += `
                    <div>
                        <img class="product-photo" src="${p.imgSrc}" alt="PCでコードを書く男性">
                        <div class="product-explain">
                            <span>${p.cardTitle}</span>
                            <h3>${p.cardCopy}</h3>
                            <p>${p.cardText}</p>
                        </div>
                    </div>
            `
});

const ProductLeft = document.getElementById('productLeft');
const ProductRight = document.getElementById('productRight');

ProductLeft.innerHTML = prodcutLeftContent;
ProductRight.innerHTML = productRightContent;

const visionList = [
    {
        no: "01",
        h4: "CUSTOMER IS BOSS",
        h5: "すべてはお客様のために", // HTMLには01がありませんでしたが、文脈から補完しました
        p: "私たちは常にお客様志向で行動し、お客様を喜ばせ、期待値を超えた感動を提供することを大切にします。"
    },
    {
        no: "02",
        h4: "MOVE FAST",
        h5: "早さは価値",
        p: "素早く試し、素早く実行することで新しい気付きや発見を見つけていきます。"
    },
    {
        no: "03",
        h4: "IMPACT DRIVEN",
        h5: "作業するのは仕事ではない",
        p: "問題から考え、成果とは何かを考え続け、インパクトのある成果を生むために仕事をしていきます。"
    },
    {
        no: "04",
        h4: "SAVE TIME, SAVE MONEY",
        h5: "浪費は命取りになる",
        p: "少ないコストでできる方法を考えます。お金だけでなく、人の時間をいただいている自覚を持ち、あらゆるリソースを有意義に活用します。"
    },
    {
        no: "05",
        h4: "BE GENTLE",
        h5: "「優しくない」をなくす",
        p: "社会をすこしずつ優しくしていきます。自分、家族、同僚、顧客、他人、全ての人に優しくいることを心がけます。"
    },
    {
        no: "06",
        h4: "ABC",
        h5: "当たり前の事をバカにせずにちゃんとやる",
        p: "礼儀、健康、嘘をつかない。当たり前の事が出来ているかを常に自問し、当たり前の基準を高く持って行動します。"
    },
    {
        no: "07",
        h4: "ZTI",
        h5: "絶対的当事者意識",
        p: "役職や役割に応じた相対的な当事者意識ではなく、自身の身で起こることすべてに対する絶対的な当事者意識を持ちます。"
    }
];

let visionHTML = "";

visionList.forEach(p => {
    visionHTML += `
        <div class="vision-box">
            <img src="images/index/vision-${p.no}.png" alt=${p.no}>
            <div>
                <h4>${p.h4}</h4>
                <h5>${p.h5}</h5>
                <p>${p.p}</p>
            </div>
        </div>
    `
});

const visionItems = document.getElementById("visionItems");
visionItems.innerHTML = visionHTML;
