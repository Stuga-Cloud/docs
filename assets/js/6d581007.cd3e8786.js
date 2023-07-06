"use strict";(self.webpackChunkstuga_cloud_docs=self.webpackChunkstuga_cloud_docs||[]).push([[470],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(n),m=a,g=p["".concat(l,".").concat(m)]||p[m]||d[m]||i;return n?r.createElement(g,o(o({ref:t},c),{},{components:n})):r.createElement(g,o({ref:t},c))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:a,o[1]=s;for(var u=2;u<i;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2285:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var r=n(7462),a=(n(7294),n(3905));const i={sidebar_position:1,id:"zero-knowledge-database",title:"Zero Knowledge Database"},o=void 0,s={unversionedId:"services/zero-knowledge-database",id:"services/zero-knowledge-database",title:"Zero Knowledge Database",description:"Zero Knowledge Database",source:"@site/docs/services/zero-knowledge-database.md",sourceDirName:"services",slug:"/services/zero-knowledge-database",permalink:"/docs/docs/services/zero-knowledge-database",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,id:"zero-knowledge-database",title:"Zero Knowledge Database"},sidebar:"docsSidebar",previous:{title:"Introduction",permalink:"/docs/docs/Introduction"},next:{title:"Container Registry",permalink:"/docs/docs/services/registry"}},l={},u=[{value:"Zero Knowledge Database",id:"zero-knowledge-database",level:2},{value:"Protocole de communication",id:"protocole-de-communication",level:3},{value:"Version plus complete avec authorit\xe9 de certificat",id:"version-plus-complete-avec-authorit\xe9-de-certificat",level:4},{value:"D\xe9coupage d&#39;un message",id:"d\xe9coupage-dun-message",level:4},{value:"Insertion",id:"insertion",level:3},{value:"Query",id:"query",level:3},{value:"Liste des paquets mis a disposition",id:"liste-des-paquets-mis-a-disposition",level:2}],c={toc:u},p="wrapper";function d(e){let{components:t,...i}=e;return(0,a.kt)(p,(0,r.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"zero-knowledge-database"},"Zero Knowledge Database"),(0,a.kt)("p",null,"Ce projet est une base de donn\xe9e qui a la particularit\xe9 de trait\xe9 uniquement avec des donn\xe9es chiffr\xe9es."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Les donn\xe9es sont chiffr\xe9es :")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Au repos"),(0,a.kt)("li",{parentName:"ul"},"Pendant le transport"),(0,a.kt)("li",{parentName:"ul"},"Pendant leurs utilisations")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Pour cela, on utilise diff\xe9rent algorithme :")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"AES-GMC-SIV (AES Galois Counter Mode with Synthetic Initialization Vector)"),(0,a.kt)("li",{parentName:"ul"},"Kyber (protocol post quantique pour la transmission des donn\xe9es)"),(0,a.kt)("li",{parentName:"ul"},"Falcon (protocol de signature utilis\xe9e par le certificat d'autorit\xe9)"),(0,a.kt)("li",{parentName:"ul"},"OPE (Order Preserving Encryption) bas\xe9 sur la distribution hyperg\xe9om\xe9trique")),(0,a.kt)("h3",{id:"protocole-de-communication"},"Protocole de communication"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Diagramme de sequence",src:n(3885).Z,width:"1590",height:"1860"})),(0,a.kt)("h4",{id:"version-plus-complete-avec-authorit\xe9-de-certificat"},"Version plus complete avec authorit\xe9 de certificat"),(0,a.kt)("p",null,"Le protocol Kyber est un standard retenu et seul finaliste, il n'est pas encore standardis\xe9 par la ",(0,a.kt)("a",{parentName:"p",href:"https://www.nist.gov/news-events/news/2022/07/nist-announces-first-four-quantum-resistant-cryptographic-algorithms"},"NIST (National Institute of standard and technology)"),"."),(0,a.kt)("p",null,"Il n'existe donc tr\xe8s peu de serveur qui serve d'autorit\xe9 de certificat, dans notre cas, nous avons d\xe9cid\xe9 de cr\xe9er le n\xf4tre."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Diagramme de sequence avec KMS Key Managnement Syst\xe8me",src:n(3574).Z,width:"1638",height:"1650"})),(0,a.kt)("p",null,"Voici \xe0 quoi va ressembler un certificat."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-toml"},'public_key = [66, 1, 50, 245, ...]\nidentity_info = "Server"\nissuer_info = "Stuga Cloud Certificate Authority"\nsignature = [82, 7, 0, 0, 0, 0, 0, 0, 0, 130, 128, 64, 1, 0, 0, 0, 51, 7, 0, 0, 0, 0, 0, 0]\nvalid_from = "2023-07-05T22:03:41.385509Z"\nvalid_to = "2024-07-04T22:03:41.385509Z"\nserial_number = "3de477e3-1396-4af0-900f-b710e02ea32b"\ncipher_suits = ["kyber768", "falcon"]\n')),(0,a.kt)("p",null,"Il utilise une combinaison de Falcon et de kyber, c'est falcon (Algorithme post-quantique de signature courte) qui signe la clef publique du certificat \xe0 sa cr\xe9ation, plus tard on pourra v\xe9rifier son authenticit\xe9 gr\xe2ce \xe0 \xe7a."),(0,a.kt)("h4",{id:"d\xe9coupage-dun-message"},"D\xe9coupage d'un message"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"D\xe9coupage message 1er octets type 4 tailles puis message",src:n(5290).Z,width:"2016",height:"484"})),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},"#[derive(Debug, Serialize)]\n#[repr(u8)]\npub enum MessageType {\n    Setup,\n    Authentification,\n    Insert,\n    InsertOpe,\n    InsertResponse,\n    Query,\n    QueryResponse,\n    SingleValueResponse,\n    Count,\n    Update,\n    UpdateResponse,\n    Delete,\n    DeleteResult,\n    DeleteForUsecase,\n    Drop,\n    DropResult,\n    EndOfCommunication,\n    CloseCommunication,\n}\n")),(0,a.kt)("p",null,"Les messages chiffr\xe9es sont serializer avec le protocol ",(0,a.kt)("a",{parentName:"p",href:"https://cbor.io/"},"CBOR"),", Protocol de transfer binaire de donn\xe9e optimis\xe9 pour \xeatre l\xe9ger sur le reseau."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},"#[derive(Debug, Serialize, Deserialize, PartialEq, Eq, Clone)]\npub enum Message {\n    ClientSetup(ClientSetupSecureConnection),\n    ClientAuthentification(ClientAuthentication),\n    Insert(Insertion),\n    InsertOpe(InsertionOpe),\n    InsertResponse { inserted_id: String },\n    Query(Query),\n    QueryResponse(QueryOutput),\n    SingleValueResponse { data: Option<Vec<u8>>, nonce: Option<Vec<u8>> },\n    Count(CountSubject),\n    CountResponse(u32),\n    Update(Update),\n    UpdateResponse { status: UpdateStatus },\n    Delete(Delete),\n    DeleteResult(bool),\n    DeleteForUsecase { collection: String, id: String },\n    Drop(DropSubject),\n    DropResult(bool),\n    EndOfCommunication,\n    CloseCommunication,\n}\n")),(0,a.kt)("h3",{id:"insertion"},"Insertion"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Structure")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},"#[derive(Debug, Serialize, Deserialize, PartialEq, Eq, Clone)]\npub struct Insertion {\n    pub collection: String,\n    pub acl: Vec<String>,\n    pub data: Vec<u8>,\n    pub usecases: Vec<String>,\n    pub nonce: Vec<u8>,\n}\n\n#[derive(Debug, Serialize, Deserialize, PartialEq, Eq, Clone)]\npub struct InsertionOpe {\n    pub collection: String,\n    pub acl: Vec<String>,\n    pub data: Vec<u8>,\n    pub usecases: Vec<String>,\n}\n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Exemple d'utilisation du client")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},'let data_bytes = liserk_client::serialize(&data)?;\n\nlet acl = vec!["manager".to_string(), "stock_analyst".to_string()];\nlet usecases = vec![\n    "inventory_management".to_string(),\n    "statistical_analysis".to_string(),\n];\nlet collection = "medications".to_string();\nlet ope_collection = "medication:stock:ope".to_string();\n\nclient\n    .insert(\n        collection,\n        data_bytes,\n        Vec::new(),\n        acl.clone(),\n        usecases.clone(),\n    )\n    .await?;\nclient\n    .insert_ope(stock, acl, usecases, ope_collection)\n    .await?;\n')),(0,a.kt)("h3",{id:"query"},"Query"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Structure")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},"#[derive(Debug, Serialize, Deserialize, PartialEq, Eq, Clone)]\npub enum QueryType {\n    And,\n    Or,\n}\n\n#[derive(Debug, Serialize, Deserialize, Clone)]\npub enum Query {\n    Single(SingleQuery),\n    Compound(CompoundQuery),\n    GetById { id: String, collection: String },\n    GetByIds { ids: Vec<String>, collection: String },\n}\n\n#[derive(Debug, Serialize, Deserialize, Clone)]\npub struct SingleQuery {\n    pub collection: String,\n    pub usecase: String,\n    pub upper_limit: Option<f64>,\n    pub lower_limit: Option<f64>,\n}\n\n#[derive(Debug, Serialize, Deserialize, Clone)]\npub struct CompoundQuery {\n    pub query_type: QueryType,\n    pub queries: Vec<Query>,\n}\n\n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Exemple d'utilisation avec le client")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},'let low_stock_query = SingleQueryBuilder::default()\n    .with_collection("medication:stock:ope".to_owned())\n    .with_usecase("statistical_analysis".to_owned())\n    .with_encrypted_field_less_than(80.0)\n    .build();\n\n\nlet warehouse_query = Query::GetById {\n    id: nearest_warehouse_id.to_string(),\n    collection: "stock".to_owned(),\n};\n\nlet compound_query = CompoundQueryBuilder::default()\n    .with_query_type(QueryType::And)\n    .with_query(warehouse_query)\n    .with_query(Query::Single(low_stock_query))\n    .build();\n\nlet low_stock_result = db_client.query(Query::Compound(compound_query)).await?;\n')),(0,a.kt)("h2",{id:"liste-des-paquets-mis-a-disposition"},"Liste des paquets mis a disposition"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://crates.io/crates/liserk-ope"},"Liserk-OPE")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://crates.io/crates/liserk-shared"},"Liserk-shared")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/Stuga-Cloud/liserk-encrypt/tree/main/server"},"Liserk-server")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://crates.io/crates/liserk-client"},"Liserk-client")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://crates.io/crates/certificate_authority"},"certificate-authority"))))}d.isMDXComponent=!0},5290:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/message_decoupage_memoire_db-cd5dc6afccf7f62c240c1a749076ca5e.png"},3574:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/sequence-diagram-KMS-d46fde1d130c4a3ce0ed713de7948dea.png"},3885:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/sequence_diagram_db-5b068b353619b062d1a4478e9d87c46a.png"}}]);