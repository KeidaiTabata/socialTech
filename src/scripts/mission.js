const fiveGoal = [
    {
        No: "01",
        h3: "貧困をなくそう",
        position:"left",
        p: "平均年収の高いエンジニアになることを支援し、相対的貧困を抜け出す社会人を増やしていきます。さらに、技能取得や職業訓練の機会を得られない貧困家庭の子供にもIT教育を提供し「貧困の連鎖」を食い止めることを目指します。"
    },
    {
        No: "02",
        h3: "質の高い教育をみんなに",
        position:"right",
        p: "手頃な価格で質の高い技術・職業教育の提供を行い、誰もがエンジニアになれるための教育プラットフォームを目指します。子供向けSTEAM教育を提供し、グローバル社会やAI時代に適応して世界で通用する価値の高い人材を育成します。"
    },
    {
        No: "03",
        h3: "ジェンダー平等の実現",
        position:"left",
        p: "女性エンジニアを輩出することは、ジェンダーギャップ指数の経済、教育分野に影響を与えると考えています。女性エンジニアを増やすことで、ライフイベントが多い女性の社会進出を促す機会の創出やシングルマザーの貧困解消をし、男女格差の無い、健全な社会を目指します。"
    },
    {
        No: "04",
        h3: "生産的で働きがいのある雇用",
        position:"right",
        p: "長期的な経済成長を継続するためには、生産性を高めた産業の拡大と人材の輩出が必要です。エンジニアはイノベーション産業を成長させるための大きな鍵を握っており、さらにクリエイティブな職業で働きがいのある人間らしい雇用を生み出せると考えています。"
    },
    {
        No: "05",
        h3: "不平等をなくす",
        position:"left",
        p: "障害やハンディキャップを持っていても、エンジニアになることで生産的に働くことができます。障がい者雇用における正社員率と平均賃金に大きな開きを無くすために、誰もがエンジニアになれる機会を提供します。"
    }
];

const missionGoalRead = document.getElementById("fiveGoals");

console.log(missionGoalRead);
let fiveGoalHTML = "";

fiveGoal.forEach(item => {
    fiveGoalHTML += `
    <div>
        <img class="fivegoals-image-${item.position}" src="images/mission/mission-5goals${item.No}.png" alt="PCを操作する女の子">
        <span class="fivegoals-number">${item.No}</span>
        <h3 class="fivegoals-h3">${item.h3}</h3>
        <p class="fivegoals-p">${item.p}</p>
    </div>
    `
});

missionGoalRead.innerHTML = fiveGoalHTML;