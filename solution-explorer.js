const groups = [
  {id:'ai', title:'AI 應用與探索', sub:'從日常工作，找到 AI 的第一步', intro:'讓 AI 協助找資料、整理文件與處理重複工作。', items:[
    {q:'公司文件太多，新人或客服找不到答案',name:'企業知識 AI 助理',desc:'從 SOP、常見問題或文件出發，探索自然語言查詢；也可評估歷史維修工單的搜尋與分類。',products:['HPE Private Cloud AI','HPE Machine Learning Inference Software','HPE DocBot'],note:'知識庫、客服、新人與工單需求的交付方式不同；工單查詢的實際應用及產品搭配需另評估。'},
    {q:'查詢營運數據，總是需要請資訊人員幫忙',name:'自然語言查詢與跨來源搜尋',desc:'探索以自然語言查詢資料庫，或同時參考企業文件與結構化資料。',products:['HPE Private Cloud AI','HPE Machine Learning Inference Software'],note:'資料連線、使用者權限和回答正確性需個別評估。'},
    {q:'合約、報告與文件需要花很多時間整理',name:'AI 文件整理與草稿',desc:'從固定格式的文件開始，探索重點擷取、批次整理及根據資料產生草稿。',products:['HPE Private Cloud AI','HPE Machine Learning Inference Software','HPE DocBot','HPE DocGen'],note:'文件與產生內容仍需人工核對；應用及授權範圍待確認。'},
    {q:'會議逐字稿、摘要與翻譯整理不完',name:'會議轉寫與語音翻譯探索',desc:'探索把會議錄音整理成文字與待辦，或協助跨語言溝通。',products:[],note:'支援語言、辨識品質與交付方式待確認。'},
    {q:'想讓客戶或員工用語音提問',name:'語音問答與客服探索',desc:'探索語音輸入、回答生成及語音輸出的服務流程。',products:['HPE Private Cloud AI','HPE Machine Learning Inference Software'],note:'實際語言、系統串接和交付需另行確認。'},
    {q:'工程師需要協助撰寫與理解程式',name:'AI 程式開發助理探索',desc:'在開發流程中參考 AI 提供的程式說明與修改建議。',products:['HPE Private Cloud AI','HPE Machine Learning Inference Software','HPE CodeGen'],note:'開發工具及授權需確認；程式仍須由工程師檢查。'}]},
  {id:'hardware',title:'硬體設備汰換與儲存',sub:'讓設備與資料空間跟上需求',intro:'從設備更新到新據點建置，依工作負載選擇適合的架構。',items:[
    {q:'伺服器老舊，擔心 ERP 或資料庫中斷',name:'伺服器與商業系統升級',desc:'盤點現有系統與工作負載，規劃設備更新、資料遷移及後續保護。',products:['HPE ProLiant','HPE MSA'],note:'是否需要獨立儲存設備，應依容量、可用性與預算評估。'},
    {q:'新辦公室或新據點需要從零建立設備',name:'小型辦公室基礎架構',desc:'依據點需求規劃伺服器、網路、資料空間與備份方式。',products:['HPE ProLiant','HPE Aruba Instant On','HPE StoreEasy Storage'],note:'依實際情況選配，並非每個據點都需要全部設備。'},
    {q:'多台主機需要共用資料，儲存空間不夠',name:'共享儲存與容量規劃',desc:'評估現有資料量、成長速度及主機共享需求，規劃適合的儲存環境。',products:['HPE MSA','HPE Alletra MP B10000'],note:'不同產品適用規模不同，需確認容量、效能、相容性與預算。'},
    {q:'總公司與分公司想一起規劃設備',name:'據點基礎架構整合',desc:'依據點規模評估運算、儲存與虛擬化管理，讓系統架構更容易掌握。',products:['HPE ProLiant','HPE SimpliVity','HPE Private Cloud PC3000','HPE Alletra MP B10000'],note:'產品為不同選項，非一套已確認的組合；節點及授權條件需核對。'},
    {q:'希望集中規劃企業私有雲與資源管理',name:'企業私有雲規劃',desc:'針對較多系統與管理需求，評估私有雲平台及資源管理方式。',products:['HPE Private Cloud PC7000','HPE Morpheus Enterprise'],note:'適用規模、完整設備、服務與供應範圍仍需確認。'}]},
  {id:'systems',title:'系統管理與備份',sub:'掌握系統狀態，準備資料復原',intro:'從虛擬化管理到備份與復原，為重要系統做好準備。',items:[
    {q:'虛擬機越來越多，想重新評估管理方式',name:'虛擬化管理與轉型',desc:'盤點現有伺服器與虛擬機，評估沿用設備、平台管理及分階段遷移。',products:['HPE Morpheus VM Essentials','HPE HVM','HPE ProLiant'],note:'舊設備、版本、授權、遷移條件與相容性須先核對。',more:'可進一步探索：現有主機沿用評估、從 VMware 規劃遷移。'},
    {q:'設備分散，資訊人員不容易掌握狀態',name:'系統監控、遠端工作與自動化',desc:'依團隊需求評估設備監看、遠端存取、虛擬網路與日常管理自動化。',products:['HPE Compute Ops Management','HPE OpsRamp','HPE Morpheus Software'],note:'不同版本提供的功能及授權不同，遠端桌面可能需第三方軟體。',more:'可進一步探索：遠端桌面、現有自動化腳本、虛擬網路隔離、跨雲管理、系統狀態監看。'},
    {q:'重要資料不見或被攻擊，還能不能還原？',name:'企業備份與資料復原',desc:'從重要資料盤點開始，規劃備份位置、還原測試，以及雲端或離線副本。',products:['HPE StoreOnce','HPE StoreOnce VSA','HPE StoreEver'],note:'備份軟體、平台相容性、授權與還原流程須依實際環境確認。',more:'可進一步探索：備份軟體保護、虛擬機備份、雲端備份副本、主要儲存快照防護。'},
    {q:'關鍵系統不能停太久，如何準備復原？',name:'系統持續運作與災難復原',desc:'依系統重要性與復原目標，評估高可用、複寫、隔離復原和啟動順序。',products:['HPE HVM','HPE Zerto Software'],note:'各方案的站點、儲存、網路與版本條件不同；仍需定期演練。',more:'可進一步探索：兩主機叢集、跨站點高可用、儲存與虛擬機分層保護、HVM 災難復原、隔離重建、系統復原順序。'}]}
];
// 方案說明為討論草稿；效益是預期方向，並非已驗證成果。
const narratives = {
  ai:[
    ['先挑選常用 SOP、客服 FAQ 或既有工單，整理可查詢的內容與權限，再以 AI 協助使用者找到相關資料。','從資料量與使用範圍較明確的單一場景開始，較容易檢視答案品質，也能先釐清文件是否適合納入。','讓新人、客服或維修人員更容易找到參考資訊，減少反覆詢問與搜尋的時間。'],
    ['盤點要查詢的資料來源與常見問題，設計查詢權限，測試以自然語言查詢資料庫或搭配文件檢索。','先界定資料表與可回答的問題，有助於控制資料存取範圍並檢驗查詢結果。','讓具備權限的人員更容易提出資料問題，減少來回確認查詢需求的工作。'],
    ['選定合約或報告等文件類型，規劃重點擷取、批次整理或依資料產生草稿，並保留人工覆核。','先從格式與檢查標準較清楚的文件開始，方便比較 AI 輸出與人工整理的差異。','減少重複彙整與初稿製作的工作，讓人員把時間留給內容檢查與判斷。'],
    ['選擇一種會議錄音與語言組合，評估逐字稿、摘要、待辦整理或即時翻譯流程。','先用實際會議音質、說話方式與語言測試，才能判斷辨識品質是否符合需求。','協助縮短會後整理時間，讓參與者較容易回顧討論內容。'],
    ['釐清常見問題及使用對象，評估語音辨識、問答與語音回覆的串接方式，先以小範圍測試。','語音辨識品質與既有客服流程會影響體驗，需要先確認語言、資料來源及轉人工方式。','提供另一種查詢與互動方式，協助處理部分重複性的問題。'],
    ['以既有開發流程為基礎，評估將程式說明、產生建議與修改協助帶入工程師使用的工具。','保留開發人員的審查流程，並先釐清程式碼權限與模型部署環境。','協助工程師理解程式、整理建議與處理部分重複工作。']
  ],hardware:[
    ['盤點 ERP、資料庫與現有主機，依工作負載評估 ProLiant；若多主機需共享資料，再評估 MSA。','先從實際系統的運算、容量與維護需求選型，可避免直接套用不符合規模的設備配置。','為既有商業系統建立較適合的運算環境，並在遷移前掌握停機與備份需求。'],
    ['依新據點的人數、應用與網路需求，規劃伺服器、網路和資料空間，並一起考慮備份。','新據點可從預期工作量開始規劃，讓設備、連線與資料保護一起納入。','協助新據點建立可使用、可管理且能配合需求調整的資訊環境。'],
    ['盤點主機數、資料容量、存取方式及效能需求，再比較 MSA 或其他企業儲存方向。','共享需求與容量成長會影響選型；不同產品服務的規模與預算條件也不同。','讓多台主機有共同的資料儲存規劃，並及早掌握容量擴充需求。'],
    ['按總公司與分公司的系統、空間及維運條件，評估一般伺服器或整合運算與儲存的架構。','各據點規模和可用性需求可能不同；分開評估有助於選擇合適的設備層級。','協助企業整理分散據點的設備架構，並為後續集中管理建立基礎。'],
    ['盤點既有系統、資源配置與管理流程，再評估企業私有雲平台和服務的適用範圍。','私有雲涉及設備、平台、授權與營運方式，需先確認規模與管理需求是否相符。','協助企業更有系統地規劃內部運算資源與管理方式。']
  ],systems:[
    ['先盤點虛擬機、現有主機與授權，再評估 VM Essentials、HVM 或既有平台的管理與遷移路徑。','先確認應用依賴及硬體相容性，才有條件安排測試和分階段轉換。','協助掌握虛擬化環境，並讓平台選擇與後續遷移更有依據。'],
    ['依資訊人員需要掌握的設備和系統，規劃狀態監看、遠端存取或管理流程自動化。','從現有維運工作與管理範圍出發，才能比較不同工具及版本是否符合需求。','讓資訊人員較容易查看系統狀態，並減少部分重複的管理工作。'],
    ['盤點重要資料、備份來源與保存時間，評估 StoreOnce 作為備份目標，並規劃異地或離線副本及還原演練。','備份需要同時考慮資料保存、備份軟體、儲存目標與實際還原，而不只是新增一台設備。','協助企業在資料遺失或系統異常時，有事先規劃的資料復原方式。'],
    ['依關鍵系統與可接受中斷時間，評估高可用、複寫、隔離復原及系統啟動順序，並安排演練。','不同系統對中斷時間和資料遺失的容忍度不同，需分開規劃復原層級。','讓團隊事先了解復原流程與優先順序，協助縮短故障後的應變時間。']
  ]
};
const productRoles={
 'HPE Private Cloud AI':'私有 AI 運算平台方向','HPE Machine Learning Inference Software':'AI 模型推論軟體方向','HPE DocBot':'文件問答應用方向','HPE DocGen':'文件草稿應用方向','HPE CodeGen':'程式助理應用方向',
 'HPE ProLiant':'執行企業系統的伺服器方向','HPE MSA':'共享儲存選項','HPE Aruba Instant On':'據點網路設備方向','HPE StoreEasy Storage':'檔案儲存設備方向','HPE Alletra MP B10000':'企業儲存選項','HPE SimpliVity':'整合運算與儲存的架構方向','HPE Private Cloud PC3000':'主機房平台方向','HPE Private Cloud PC7000':'企業私有雲平台方向','HPE Morpheus Enterprise':'私有雲與跨環境管理方向',
 'HPE Morpheus VM Essentials':'虛擬機管理軟體方向','HPE HVM':'虛擬化執行環境方向','HPE Compute Ops Management':'伺服器管理方向','HPE OpsRamp':'跨系統維運管理方向','HPE Morpheus Software':'虛擬化或自動化管理方向','HPE StoreOnce':'備份儲存目標方向','HPE StoreOnce VSA':'虛擬形式的備份目標方向','HPE StoreEver':'磁帶保存選項','HPE Zerto Software':'複寫與災難復原方向'
};
// 各情境依資料來源分開；示範、參考實作和產品候選不視為已驗證的整套配置。
const aiOptions=[
 {application:'文件問答可評估 DocBot；客服政策與客戶資料查詢可參考 HPE 的 Langflow Agent 方案；維修工單檢索則須依現有資料與流程規劃。',stack:'DocBot 是 HPE 的文件問答應用方向；HPE 客服方案另使用 Private Cloud AI、HPE MLIS 與 Langflow。維修工單應用及產品選擇需另外評估。',items:['HPE DocBot'],note:'DocBot 適用、授權及交付待確認；客服與工單需求的資料來源、實際配置不同。'},
 {application:'資料庫查詢可參考自然語言轉 SQL 示範；若同時需要文件與資料庫，可另看 Langflow Agent 參考實作。',stack:'HPE 的公開技術示範提供 Private Cloud AI 自然語言查詢資料庫及 Agent 整合方向；應用範圍、模型與資料連線需分別評估。',items:['HPE Machine Learning Inference Software','HPE Private Cloud AI'],note:'資料權限、模型、部署方式及應用交付範圍待確認。'},
 {application:'批次擷取合約可參考 Batch Agreement Robot；根據資料產生草稿則可評估 DocGen。文件問答的 DocBot 是另一個用途。',stack:'批次文件示範列出 HPE MLIS；DocGen 與 DocBot 則列於 Private Cloud AI 的應用方向。實際選用依任務決定。',items:['HPE DocGen','HPE DocBot'],note:'DocGen、DocBot 與批次分析並非同一功能，也不代表都隨平台交付。'},
 {application:'分別評估會議錄音轉逐字稿，以及即時語音轉寫與翻譯；兩者對即時性、語言與設備的要求不同。',stack:'可先確認會議環境、語言和資料處理需求，再選擇適合的設備與應用。',items:[],note:'HPE 產品對應、語言支援與實際交付仍需確認。'},
 {application:'語音問答的流程包含語音辨識、回答生成及語音合成；可用原廠示範作為討論起點。',stack:'HPE 的語音對話應用列出 Private Cloud AI 與 HPE MLIS，搭配語音模型及介面；實際產品組合依需求評估。',items:['HPE Private Cloud AI','HPE Machine Learning Inference Software'],note:'語言辨識、模型授權、整合及實際交付方式須驗證。'},
 {application:'程式助理可評估以 CodeGen 和程式模型協助開發工作。',stack:'HPE CodeGen 是 Private Cloud AI 的應用方向；模型、開發工具和部署方式需依需求規劃。',items:['HPE CodeGen','HPE Machine Learning Inference Software'],note:'程式工具、模型、授權與資料存取控制須另確認。'}
];
const modelChoices=[
 [{name:'ProLiant ML110 Gen11',why:'直立式主機，可作為中小企業 ERP、資料庫與未來擴充的評估方向。',url:'https://www.hpe.com/int/en/products/compute/proliant/ml110-gen11.html'}, {name:'ProLiant DL320 Gen11',why:'機架式 1U 主機，可在已經有機櫃、希望集中管理時比較。',url:'https://www.hpe.com/psnow/downloadDoc/HPE%20ProLiant%20DL320%20Gen11%20QuickSpecs-a50004315enw.html?ver=41'}],
 [{name:'ProLiant ML30 Gen11',why:'直立式設計，HPE 將小型辦公室及分點列為適用對象；可作為需求較單純的起點。',url:'https://www.hpe.com/int/en/products/compute/proliant/ml30-gen11.html'}, {name:'ProLiant ML110 Gen11',why:'同為直立式，可在更重視主機擴充與資料儲存彈性時一併評估。',url:'https://www.hpe.com/int/en/products/compute/proliant/ml110-gen11.html'}],
 [{name:'MSA 2070 Flash Bundle',why:'原廠提供預先配置 SSD 的套件；可在重視快閃儲存時，依容量及連線介面比較。',url:'https://www.hpe.com/us/en/collaterals/collateral.a50009222enw.html'}, {name:'MSA 2072 Hybrid-Flash',why:'原廠列為混合快閃型號；可按容量、介面與實際磁碟組態評估。',url:'https://www.hpe.com/us/en/collaterals/collateral.a50009222enw.html'}],
 [{name:'ProLiant ML30／ML110 Gen11',why:'可先評估各據點是否只需要個別伺服器及其擴充能力。',url:'https://www.hpe.com/int/en/products/compute/proliant/ml110-gen11.html'}, {name:'SimpliVity 325 Gen11',why:'HPE 列為整合運算與儲存的超融合系統；可在據點需整合虛擬化及儲存時評估。',url:'https://www.hpe.com/int/en/collaterals/collateral.a50004270enw.html'}],
 [{name:'Private Cloud PC7000',why:'企業私有雲平台方向；可用於討論集中管理及所需服務。',url:''},{name:'ProLiant 伺服器與獨立管理軟體',why:'可先從現有環境與管理需求評估；不假設等同 Private Cloud PC7000 的功能或服務。',url:''}]
];
const discovery={
 ai:['文件類型與數量、使用者權限、資料更新方式與答案引用需求。','資料來源、可查詢範圍、使用者權限與答案核對方式。','文件類型、處理量、輸出格式與人工覆核流程。','會議語言、音質、即時性需求與資料處理方式。','主要使用語言、常見問題、語音品質與轉人工流程。','開發工具、程式碼存取權限、使用人數及部署需求。'],
 hardware:['現有系統、使用人數、運算負載、可停機時間與預算。','使用人數、應用程式、網路環境、資料容量及備份需求。','容量成長、工作負載、主機數量、連線介面與預算。','據點數、系統需求、現有機房、維運人力與可用性要求。','現有工作負載、管理範圍、服務模式、授權與預算。'],
 systems:['目前的虛擬機、主機型號、授權、應用相依性與遷移時間。','需監看的設備與系統、既有工具、管理人員及遠端使用條件。','保護對象、資料量、保存時間、備份位置及還原目標。','關鍵系統、可接受中斷時間、資料遺失容忍度與復原站點。']
};
// 僅連結已公開、與該情境有明確關聯的案例；案例內容不代表整套配置相同。
const relatedCases={
 ai:{2:[['53','訊達的 AI 報價文件流程']]},
 hardware:{
  0:[['66','教育機構更新老舊虛擬化環境']],
  2:[['62','投資顧問業者更新儲存平台']],
  3:[['66','教育機構整合分散環境的資源管理'],['60','食品業者以超融合架構支援多項應用']],
  4:[['66','教育機構規劃私有雲更新']]
 },
 systems:{
  0:[['60','食品業者的平台擴充與 VME 授權'],['66','教育機構更新虛擬化環境']],
  1:[['64','科技集團升級虛擬桌面與委外維運']],
  2:[['63','電子製造業者規劃備份與異地複本']],
  3:[['62','投資顧問業者規劃高可用架構與備份'],['63','電子製造業者規劃異地備份複本']]
 }
};
// 原廠公開產品及應用說明，實際交付與配置仍須確認。
const aiReferences=[
 [['DocBot','https://www.hpe.com/us/en/collaterals/collateral.a50015391enw.html'],['客服 Agent','https://www.hpe.com/us/en/collaterals/collateral.a50015544enw.html']],
 [['自然語言查詢資料庫','https://developer.hpe.com/blog/hpe-private-cloud-ai-interact-with-sql-database-using-natural-language/'],['文件與資料庫 Agent','https://www.hpe.com/us/en/collaterals/collateral.a50016177enw.html']],
 [['批次文件分析','https://www.hpe.com/us/en/collaterals/collateral.a50016104enw.html'],['DocGen','https://www.hpe.com/us/en/collaterals/collateral.a50015546enw.html']],
 [],
 [['語音對話 Agent','https://www.hpe.com/us/en/collaterals/collateral.a50016107enw.html']],
 [['CodeGen','https://www.hpe.com/us/en/collaterals/collateral.a50015547enw.html']]
];
const paths=document.querySelector('#paths'), explorer=document.querySelector('#explorer');
function create(tag,cls,text){const node=document.createElement(tag);if(cls)node.className=cls;if(text)node.textContent=text;return node;}
function render(id){const group=groups.find(x=>x.id===id)||groups[0];paths.replaceChildren();for(const g of groups){const b=create('button','path');b.type='button';b.setAttribute('aria-pressed',String(g.id===group.id));b.append(create('strong','',g.title),create('span','',g.sub));b.addEventListener('click',()=>{render(g.id);document.querySelector('.path[aria-pressed=\"true\"]').focus()});paths.append(b)}
const head=create('div','explorer-head'),titles=create('div');titles.append(create('h3','',group.title),create('p','',group.intro));head.append(titles,create('span','hint','選擇情境，查看方案介紹 ↓'));const list=create('div','scenarios');group.items.forEach((item,index)=>{const d=create('details','scenario'),sum=create('summary'),label=create('div','scenario-label');label.append(create('strong','scenario-solution',item.name),create('span','scenario-question',item.q),create('span','scenario-preview',item.desc),create('span','scenario-open','查看方案'));sum.append(label);const plus=create('span','plus','+');plus.setAttribute('aria-hidden','true');sum.append(plus);const body=create('div','detail');const [approach,why,benefit]=narratives[group.id][index];body.append(create('h4','','訊達建議的方案'),create('p','',approach),create('h4','','為什麼這樣規劃'),create('p','',why),create('h4','','預期效益'),create('p','',benefit));if(item.more)body.append(create('p','detail-note',item.more));let products=item.products;let note=item.note;if(group.id==='ai'){const choice=aiOptions[index];body.append(create('h4','','這個情境的應用差異'),create('p','',choice.application),create('h4','','平台如何對應'),create('p','',choice.stack));products=choice.items;note=choice.note;}body.append(create('h4','',group.id==='ai'?'可參考的 HPE 產品或應用':'可能採用的 HPE 產品與角色'));const ps=create('ul','products');if(products.length)products.forEach(p=>{const li=create('li');li.append(create('strong','',p),create('span','',productRoles[p]||'產品方向，適用條件待確認'));ps.append(li)});else ps.append(create('li','','產品及部署方式需依需求確認。'));body.append(ps,create('p','detail-note',note));if(group.id==='ai'&&aiReferences[index].length){const refs=create('div','solution-references');refs.append(create('h4','','HPE 公開資料'));aiReferences[index].forEach(([title,url])=>{const a=create('a','',title);a.href=url;a.target='_blank';a.rel='noopener noreferrer';refs.append(a)});body.append(refs)}if(group.id==='hardware'){body.append(create('h4','','型號或架構怎麼選'));const choices=create('div','model-choices');modelChoices[index].forEach(choice=>{const row=create('div','model-choice');row.append(create('strong','',choice.name),create('p','',choice.why));if(choice.url){const link=create('a','','HPE 產品資料');link.href=choice.url;link.target='_blank';link.rel='noopener noreferrer';row.append(link)}choices.append(row)});body.append(choices,create('p','detail-note','以上是可比較的方向，非已驗證搭配或報價；CPU、記憶體、容量、介面、授權及現行供應仍需按需求確認。'));}const cases=relatedCases[group.id]?.[index];if(cases?.length){const caseSection=create('section','solution-cases');caseSection.append(create('h4','','相關成功案例'));const caseList=create('ul');cases.forEach(([id,title])=>{const li=create('li');const a=create('a','',title+' →');a.href='article.html?id=material-'+id;li.append(a);caseList.append(li)});caseSection.append(caseList,create('p','detail-note','案例的產品與服務範圍，請以案例內容為準。'));body.append(caseSection)}body.append(create('h4','','接下來可以一起確認'),create('p','',discovery[group.id][index]));const contact=create('a','solution-contact','與訊達討論這個需求');contact.href='contact.html';body.append(contact);d.append(sum,body);list.append(d)});explorer.replaceChildren(head,list)}
render('ai');
document.querySelectorAll('[data-show-group]').forEach(button=>button.addEventListener('click',()=>{render(button.dataset.showGroup);document.querySelector('#solutions').scrollIntoView({behavior:'smooth'});document.querySelector('#explorer h3').setAttribute('tabindex','-1');document.querySelector('#explorer h3').focus({preventScroll:true});}));
