const stages = [
 {
  label:'找到應用場景',title:'從一件值得改善的工作開始。',
  summary:'先不用急著選模型或設備。從每天真的有人在做、也確實遇到困難的工作出發，比較容易找出 AI 能幫上忙的地方。',
  sections:[
   ['先看工作怎麼進行','找實際執行的人聊聊：工作從哪裡開始、需要找哪些資料、通常在哪裡卡住，以及哪些判斷一定要由人決定。把現在的做法畫清楚，才知道 AI 要協助的是哪一段。'],
   ['選一個適合先試的範圍','優先考慮發生頻率高、資料取得相對清楚，而且結果有人能檢查的工作。例如整理文件或搜尋知識，可以先讓 AI 提供建議，再由人確認；不必一開始就自動執行整個流程。'],
   ['先說清楚「做得好」是什麼','想縮短查找時間、降低遺漏，還是讓新人更容易上手？先了解目前怎麼做，再約定如何比較，後續才有辦法判斷是否值得繼續。']
  ],exampleTitle:'例如：維修人員查找處理紀錄',example:'服務人員接到報修後，常需要翻找不同設備的歷史紀錄。可以先挑一類常見問題，讓 AI 協助找出相關資料，並由工程師確認答案；是否連接派工或寫回系統，可以等第一步驗證後再討論。',
  questions:['哪一項工作最花時間，或常讓人反覆查找資料？','誰會使用結果？答案或建議由誰確認？','如果先試一小部分，如何知道它有沒有幫助？'],next:'一項明確的工作問題、預計使用的人、可先試的範圍，以及衡量改善的方式。',
  hpe:'應用需求確定後，可再評估 HPE 的 AI 產品與平台是否符合運算及部署條件。',partner:'訊達協助盤點工作流程與現有系統，和使用部門一起釐清優先場景。',articles:[['企業的工作流程需要 AI Agent 嗎？','41'],['企業 AI Agent 導入 5 階段｜從找需求到正式上線','30'],['訊達智慧維修 AI Agent｜流程展示','13']]
 },
 {
  label:'評估資料與環境',title:'讓對的人，使用對的資料。',
  summary:'確認 AI 需要哪些資料、這些資料能否使用，以及要與哪些系統配合。資料和權限準備得越清楚，後續測試越貼近真實工作。',
  sections:[
   ['找出資料來源與負責人','文件可能放在共用資料夾、系統或個人電腦；同一份內容也可能有不同版本。先確認由誰維護、多久更新一次，以及使用者查到的是不是正確版本。'],
   ['把權限與處理方式說清楚','不是所有人都能看所有資料。要確認 AI 查詢時是否沿用原本權限、回答能否指出來源，以及敏感資料能送到哪裡。如果資料不完整，應讓使用者知道，而不是硬給答案。'],
   ['對照既有系統與部署條件','地端、雲端與混合方式各有取捨：除了資料位置，也要看現有系統、管理能力、使用量與成本。先釐清工作需求和限制，才能討論適合的部署方式。']
  ],exampleTitle:'例如：讓同仁查詢內部文件',example:'如果同仁想用自然語言查找作業規範，第一步是確認文件由哪個部門維護、哪些人有權限，以及舊版是否已停用。回答最好能帶出參考文件，讓同仁回頭核對。',
  questions:['資料目前放在哪裡？誰負責更新與授權？','不同身分的人，能否只看到原本有權查看的內容？','有沒有必須留在企業環境、不能外傳的資料？'],next:'資料來源與負責人清單、使用權限，以及部署和系統整合的初步限制。',
  hpe:'可依資料位置、工作負載與管理需求，評估 HPE 運算、儲存及資料保護產品。',partner:'訊達協助盤點資料、既有環境與整合條件，並與企業確認資安及管理需求。',articles:[['AI 要讀內部資料，怎麼守住存取邊界？','34'],['公司資料會不會被 AI 拿走？','29'],['企業想自己做 AI，第一步該怎麼開始？','21']]
 },
 {
  label:'規劃與驗證方案',title:'先用小範圍測試，回答重要問題。',
  summary:'展示看起來順暢，不代表放進真實工作後也能使用。測試的目的，是找出方案能做到什麼、有哪些限制，以及下一步值不值得投入。',
  sections:[
   ['先約定這次要驗證什麼','把範圍縮小到一個工作情境，確認誰參與、使用哪些資料、預計測試多久。也要先約定哪些狀況需要調整或暫停，避免測試結束後才發現彼此期待不同。'],
   ['用真實問題和原本做法比較','準備日常常見問題，也放入資料不足、內容過期或比較容易出錯的情況。除了看回答是否正確，也可以觀察查找時間、人工修正量，以及哪些問題仍無法處理。'],
   ['一起評估架構與長期成本','使用人數、反應時間、資料位置與維運能力都會影響部署選擇。費用也不只有設備或模型，還要考慮資料整理、系統整合、管理與持續支援；資訊不足時先量測，不急著決定規模。']
  ],exampleTitle:'例如：先測試維修知識查詢',example:'挑選一類設備的常見問題與處理文件，請工程師用平常會遇到的問題測試。將 AI 提供的答案與來源交由人員檢查，再和原本查找方式比較；如果資料不足，就先補資料，再決定是否擴大範圍。',
  questions:['這次測試最想確認哪個問題？誰負責判斷結果？','測試資料是否涵蓋常見情況和容易出錯的例外？','結果不如預期時，是補資料、調整方案，還是先暫停？'],next:'一份簡明的測試範圍、比較方式、結果紀錄，以及繼續、調整或暫停的決定。',
  hpe:'HPE Private Cloud AI 可作為評估企業 AI 平台的選項；實際配置需依工作負載與需求確認。',partner:'訊達協助規劃架構與系統整合，並與使用單位討論測試範圍及結果。',articles:[['AI Proof of Concept（PoC）：先驗證可行性','44'],['企業想自己做 AI，第一步該怎麼開始？','21'],['HPE Private Cloud AI：為企業部署 AI 設計的整合式平台','38']]
 },
 {
  label:'導入與持續優化',title:'讓工具真正融入每天的工作。',
  summary:'測試通過只是開始。正式使用前，要讓使用者知道怎麼操作、遇到問題找誰，也要有人持續關注資料、品質和系統狀態。',
  sections:[
   ['先安排誰負責、誰能做什麼','確認業務單位、資料維護者與資訊人員的分工。若 AI 需要寄送訊息、修改資料或執行其他動作，先釐清哪些可以自動處理，哪些必須由人核准。'],
   ['記錄結果，定期回頭檢查','觀察使用者是否採用、回答是否需要大量修正，以及遇到錯誤時如何處理。除了速度，也應留意準確性、人工工作量與費用，避免只看單一數字。'],
   ['更新要有方法，也要能回復','文件、模型或流程改變後，應先用熟悉的問題測試，確認沒有影響原本可用的功能；出現異常時，要能找到負責人，必要時回到先前可用的版本。']
  ],exampleTitle:'例如：從查詢擴展到協助派工',example:'知識查詢穩定後，企業可以評估讓 AI 根據報修內容提出派工建議。正式派工前先由人員確認；後續再觀察建議是否合適、哪些情況常需修改，作為調整依據。',
  questions:['誰維護資料與系統？使用者遇到問題要找誰？','哪些操作需要人工確認？錯誤能否追查與處理？','如何定期檢視品質、使用情況與成本？'],next:'清楚的分工與維護方式、需要人工確認的環節，以及定期檢視的項目。',
  hpe:'可依系統規劃與後續需求，評估 HPE 的運算、儲存及管理相關產品。',partner:'訊達提供建置、系統整合與維運服務，協助企業依實際需求持續調整。',articles:[['AI PoC 如何走向正式上線？','45'],['企業如何評估 AI Agent：從任務完成率、穩定性到執行成本','35'],['Prompt、Skill 與版本管理','49']]
 }
];
const tabs=[...document.querySelectorAll('[role="tab"]')];
let currentStage=0;
function selectStage(index,sync=true){
 currentStage=index;
 if(sync){const u=new URL(location.href);u.searchParams.set("stage",String(index+1));if(u.href!==location.href)history.pushState(null,"",u);}
 const s=stages[index]; tabs.forEach((tab,i)=>{tab.setAttribute('aria-selected',String(i===index));tab.tabIndex=i===index?0:-1});
 const panel=document.querySelector('#stage-content');panel.setAttribute('aria-labelledby',`tab-${index}`);
 document.querySelector('#detail-no').textContent=`0${index+1} / ${s.label}`; document.querySelector('#detail-title').textContent=s.title;document.querySelector('#detail-summary').textContent=s.summary;
 document.querySelector('#guide-content').replaceChildren(...s.sections.map(([heading,text])=>{const section=document.createElement('section');const h=document.createElement('h3');h.textContent=heading;const p=document.createElement('p');p.textContent=text;section.append(h,p);return section}));
 document.querySelector('#example-title').textContent=s.exampleTitle;document.querySelector('#example-text').textContent=s.example;document.querySelector('#next-step').textContent=s.next;
 document.querySelector('#questions').replaceChildren(...s.questions.map(q=>{const li=document.createElement('li');li.textContent=q;return li}));document.querySelector('#hpe-role').textContent=s.hpe;document.querySelector('#hpe-more').href=`hpe-stage-${index+1}.html`;document.querySelector('#partner-role').textContent=s.partner;document.querySelector('#xunda-more').href=`xunda-stage-${index+1}.html`;
 document.querySelector('#articles').replaceChildren(...s.articles.map(([title,id])=>{const a=document.createElement('a');a.href=`article.html?id=material-${id}`;const text=document.createElement('span');text.textContent=title;text.style.color='inherit';text.style.whiteSpace='normal';const arrow=document.createElement('span');arrow.textContent='閱讀文章 ';a.append(text,arrow);return a}));
 const prev=document.querySelector('#stage-prev'),next=document.querySelector('#stage-next');prev.disabled=index===0;next.disabled=index===3;
}
tabs.forEach((tab,index)=>{tab.addEventListener('click',()=>selectStage(index));tab.addEventListener('keydown',e=>{if(!['ArrowDown','ArrowUp','ArrowRight','ArrowLeft'].includes(e.key))return;e.preventDefault();const next=(index+(['ArrowRight','ArrowDown'].includes(e.key)?1:-1)+tabs.length)%tabs.length;selectStage(next);tabs[next].focus()})});const selectedStage=Number(new URLSearchParams(location.search).get("stage"));selectStage(selectedStage>=1&&selectedStage<=4?selectedStage-1:0,false);

window.addEventListener('popstate',()=>{const n=Number(new URLSearchParams(location.search).get('stage'));selectStage(n>=1&&n<=4?n-1:0,false)});
function moveStage(offset){selectStage(Math.max(0,Math.min(3,currentStage+offset)));tabs[currentStage].focus();document.querySelector('.workspace').scrollIntoView({block:'start',behavior:'instant'});}
document.querySelector('#stage-prev').addEventListener('click',()=>moveStage(-1));document.querySelector('#stage-next').addEventListener('click',()=>moveStage(1));
