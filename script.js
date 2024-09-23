
// Menu-barrrrrr
const menu=document.getElementById("menu")
const cross=document.getElementById("x")
let a=true;
menu.addEventListener('click',()=>{
    if (cross.classList.contains("fa-bars")) {
        cross.classList.add("fa-x")
        cross.classList.remove("fa-bars")
        showlist()
        // console.log("hi");
        
    } else {
        cross.classList.add("fa-bars")
        cross.classList.remove("fa-x")
        showlist()
       
    }
})



function showlist(){
    const allMenus=document.getElementById("menus")
    if(a){
    
    // console.log(allMenus);
    allMenus.innerHTML=`<span class="bar-lines"></span>
            <span class="bar-lines"></span>
            <span class="bar-lines"></span>
            <!-- <span class="bar-lines"></span> -->

            <ul>
                <li>
                    <ul>
                        <li class="nav-menu-new"><span>Microsoft 365</span></li>
                        <li class="nav-menu-new"><span>Teams</span></li>
                        <li class="nav-menu-new"><span>Copilot</span></li>
                        <li class="nav-menu-new"><span>Windows</span></li>
                        <li class="nav-menu-new"><span>Surface</span></li>
                        <li class="nav-menu-new"><span>Xbox</span></li>
                        <li class="nav-menu-new"><span>Support</span></li>
                    </ul>
                </li>
                <li>
                    <button id="nav-menu-btn">Software</button>
                </li>
                <li>
                    <button id="nav-menu-btn">PCs & Devices</button>
                
                </li>
                <li>
                    <button id="nav-menu-btn">Entertainment</button>
            
                </li>
                <li>
                    <button id="nav-menu-btn">Business</button>
               
                </li>
                <li>
                    <button id="nav-menu-btn">Developer & IT</button>
    
                </li>
                           <li>
                    <button id="nav-menu-btn">Other</button>
                  
                </li>
                <li class="nav-menu-new"><span>View Sitemap</span></li>
            </ul>`
            // const navMenuBtn=document.querySelectorAll("#nav-menu-btn")
            // navMenuBtn.forEach((newbtn)=>{
            //     newbtn.addEventListener("click",(e)=>{
            //         console.log("hello");
            //     })  
            
            // })
        
        }
        else{
            allMenus.innerHTML=""
        }
    a=!a 
}
// Menu-barrrrrr//

// Search
const magnifier=document.querySelector(".magn")
const searchAbsolute=document.querySelector("#search-cnt")
const backBtn=document.querySelector(".back-btn")
const inputSearch=document.querySelector(".sear-inp")
const searchBtn=document.querySelector(".sear-btn")


magnifier.addEventListener("click",()=>{
    searchAbsolute.classList.remove("hide")
    inputSearch.focus()
})
backBtn.addEventListener("click",()=>{
    searchAbsolute.classList.add("hide")
})

searchBtn.addEventListener("click",()=>{
    searchAbsolute.classList.remove("hide")
    inputSearch.focus()
})
// Search//


// navbarrrrrrrrr?
const navBtns=document.querySelectorAll(".nav-menu-ul > li")
const blockOne=document.querySelector("#block1")
const blockTwo=document.querySelector("#block2")
const blockThree=document.querySelector("#block3")
const blockFour=document.querySelector("#block4")
const blockFive=document.querySelector("#block5")
const blockSix=document.querySelector("#block6")
let isNavClick=true
window.addEventListener("click",()=>{
    blockOne.classList.add("hide")
    blockTwo.classList.add("hide")
    blockThree.classList.add("hide")
    blockFour.classList.add("hide") 
    blockFive.classList.add("hide")
    blockSix.classList.add("hide")
    
})
navBtns.forEach((navBtn,idx)=>{
    navBtn.addEventListener("click",(e)=>{
            e.stopPropagation()
            
            if(idx==0){
                
                blockOne.classList.toggle("hide")
                blockTwo.classList.add("hide")
                blockThree.classList.add("hide")
                blockFour.classList.add("hide")
                blockFive.classList.add("hide")
                blockSix.classList.add("hide")
                
            }  
            else if(idx==1){
                blockTwo.classList.toggle("hide")
                blockOne.classList.add("hide")
                // blockTwo.classList.add("hide")
                blockThree.classList.add("hide")
                blockFour.classList.add("hide")
                blockFive.classList.add("hide")
                blockSix.classList.add("hide")

            }               
            else if(idx==2){
                blockThree.classList.toggle("hide")
                blockOne.classList.add("hide")
                blockTwo.classList.add("hide")
                // blockThree.classList.add("hide")
                blockFour.classList.add("hide")
                blockFive.classList.add("hide")
                blockSix.classList.add("hide")

            }
            else if (idx==3) {
                blockFour.classList.toggle("hide")
                blockOne.classList.add("hide")
                blockTwo.classList.add("hide")
                blockThree.classList.add("hide")
                // blockFour.classList.add("hide")
                blockFive.classList.add("hide")
                blockSix.classList.add("hide")
            }
            else if (idx==4) {
                blockFive.classList.toggle("hide")
                blockOne.classList.add("hide")
                blockTwo.classList.add("hide")
                blockThree.classList.add("hide")
                blockFour.classList.add("hide")
                // blockFive.classList.add("hide")
                blockSix.classList.add("hide")
            }
            else if(idx==5){
                blockSix.classList.toggle("hide")  
                blockOne.classList.add("hide")
                blockTwo.classList.add("hide")
                blockThree.classList.add("hide")
                blockFour.classList.add("hide")
                blockFive.classList.add("hide")
                // blockSix.classList.add("hide")              
            }
           
    })
})

// navbarrrrrrrrr?//


// sticky-navvvvv

const featuredLeft=document.querySelector(".for-toggle")
const leftToggle=document.querySelector("#left-toggle")
const main2=document.querySelector(".main-2")
main2.addEventListener("click",(e)=>{
    leftToggle.classList.add("hide")
})  

featuredLeft.addEventListener("click",(e)=>{ 
    
    e.stopPropagation()
    leftToggle.classList.toggle("hide")
})      


const leftBtnAll=document.querySelectorAll(".left-1")
                        
leftBtnAll.forEach((leBtn,index)=>{
    leBtn.addEventListener("click",(e)=>{
       
            removeActive()
            leBtn.classList.add("active")                           
        
    })
})
function removeActive(){
    for (let i = 0; i < leftBtnAll.length; i++) {        
        leftBtnAll[i].classList.remove("active")
    }
}

// scroll function // scroll function // scroll function 

    // const sections=document.querySelectorAll(".section")

    // console.log(sections);

    // const observer=new IntersectionObserver((entries)=>{
    //     console.log(entries);
        
    //     entries.forEach((entry)=>{
    //         console.log(entry.target);
    //         const leftNameUpd=entry.target.querySelector(".heading").textContent
    //         console.log(leftNameUpd);
    //         const leftName=document.querySelector(".left-name")
    //         leftName.textContent=leftNameUpd
    //         const sectionId=entry.target.id   
    //         console.log(sectionId);
                
    //         removeActive()
    //         document.querySelector(`[href="#${sectionId}"]`).classList.add("active")

            
    //     })
    // },{
    //     threshold:0.4
    // }) 
    // sections.forEach(section=>{                          
    //     observer.observe(section)  

    
        
    // })
                                                  

// scroll function // scroll function // scroll function ////



// sticky-navvvvv////


// fetching data from json

    
    getDataFeat()
   
    async function getDataFeat(){
        const res= await fetch("./data.json")   
        console.log(res); 
        const data= await res.json()
        console.log(data);
        const dataFeat=data.featured
        console.log(dataFeat);
        featuredTabs(dataFeat)
               
    } 


// fetching data from json//



// importing data to featured tab// importing data to featured tab

const cardThree=document.querySelector("#card-3")
const cardThreeOne=document.createElement("div")
    function featuredTabs(feaArr){
        feaArr.forEach(arr=>{

           
            cardThreeOne.innerHTML+=`
            <div class="card-3-1">
                <div class="card-top">
                    <div class="card-top-img">
                        <img src="${arr.ftImg}"  alt="">
                    </div>
                </div>
                <div class="card-desc">
                    <div class="card-desc-top">
                        <div class="h2h2"><span>${arr.ftTitle}</span>
                        </div>
                        <div class="ppp">
                            <p>${arr.ftCont}</p>
                        </div>
                    </div>
                    <div class="card-desc-down">
                        <span class="rg-cont">
                            <span class="right-arrow"><i
                                    class="fa-solid fa-chevron-right fa-xs"></i></span>
                        </span>
                        <span class="spp">${arr.ftFoot}</span>
                    </div>
                </div>
            </div>

            `
        cardThree.appendChild(cardThreeOne)
        cardThreeOne.setAttribute("Class","card-3")
            
        })  
    
        
    }


// importing data to featured tab// importing data to featured tab//



// importing data to solutions tab// importing data to solutions tab
let solutionData
getDataSol()
    
    async function getDataSol(){
        const res= await fetch("./data.json")
        console.log(res); 
        const {solution}= await res.json()
        console.log(solution);
        solutionData=solution
        showSolutionTab()
        
    }
                                 

    const slBtns=document.querySelectorAll("#slBtn")
    slBtns.forEach((slbtn,index)=>{
        slbtn.addEventListener("click",()=>{
            removeSlActive()
            slbtn.classList.add("active")
            if (slbtn.classList.contains("active")){
                showAllSoltnTab(solutionData,index)    
                
                 
                       
            }
            else{

                console.log("SSS");
                
            }


        }) 
          
           
    })      

    function removeSlActive(){
        for (let i = 0; i < slBtns.length; i++) {        
            slBtns[i].classList.remove("active")
        }
    }
                  
   
const solutionTab=document.querySelector("#solutionTab")

    function showSolutionTab(){
        const solDataFeaS=solutionData.featuredSolution
        console.log(solDataFeaS);


        solDataFeaS.forEach((solDataFea,index)=>{
            console.log(solDataFea,index);
          
           
            if (index==0) {
                console.log("hi");
                
                solutionTab.innerHTML+=`

                 <div class="ai-1 migr">
                                                
                    <div class="mig-1" id="slTabHd">
                        <h4>${solDataFea.slHead}</h4>
                        <span><i class="fa-solid fa-angle-down fa-s" style="color: #2e2e2e;"></i></span>
                    </div>
                    
                    <div class="ai-body">  
                        <div class="ai-body-in">
                            <div class="build"><h4>${solDataFea.slCont}</h4></div>
                            <div class="explore">
                                <div class="ex"><a href="">${solDataFea.slTag}</a></div>
                                <div class="ex-img">
                                    <img src="${solDataFea.slImg}" alt="">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                `
            }
            else{
                console.log("hello");
                
                solutionTab.innerHTML+=`
               <div class="ai-1 migr">
                                                
                    <div class="mig-1" id="slTabHd">
                        <h4>${solDataFea.slHead}</h4>
                        <span><i class="fa-solid fa-angle-down fa-s" style="color: #2e2e2e;"></i></span>
                    </div>
                    
                    <div class="ai-body hide">  
                        <div class="ai-body-in">
                            <div class="build"><h4>${solDataFea.slCont}</h4></div>
                            <div class="explore">
                                <div class="ex"><a href="">${solDataFea.slTag}</a></div>
                                <div class="ex-img">
                                    <img src="${solDataFea.slImg}" alt="">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                `
            }
        })
        const solutionTabBody=document.querySelectorAll(".ai-body")
        const solutionTabHeads=document.querySelectorAll("#slTabHd")
        console.log(solutionTabHeads);
        solutionTabHeads.forEach((solTabHd,idx)=>{
            solTabHd.addEventListener("click",()=>{
                removeSlHide()
                solutionTabBody[idx].classList.toggle("hide")
            })
        })
        function removeSlHide(){
            for (let i = 0; i < solutionTabBody.length; i++) {
                solutionTabBody[i].classList.add("hide")
                
            }
        }
    }
   
    function showAllSoltnTab(data,x){
        
        console.log(data,x);
        
        const arrays=Object.keys(data).map(key => ({ key, value: data[key] }));
        console.log(arrays);
        console.log(arrays[x].value);
        singleObj=arrays[x].value
        console.log(singleObj);      
        const solutionTab=document.querySelector("#solutionTab")
        singleObj.forEach((single,index)=>{
            console.log(single,index);
            
            if (index==0) {
                console.log("hi");
                
                solutionTab.innerHTML=`                     

                 <div class="ai-1 migr">
                                                
                    <div class="mig-1" id="slTabHd">
                        <h4>${single.slHead}</h4>
                        <span><i class="fa-solid fa-angle-down fa-s" style="color: #2e2e2e;"></i></span>
                    </div>
                    
                    <div class="ai-body">  
                        <div class="ai-body-in">
                            <div class="build"><h4>${single.slCont}</h4></div>
                            <div class="explore">
                                <div class="ex"><a href="">${single.slTag}</a></div>
                                <div class="ex-img">
                                    <img src="${single.slImg}" alt="">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                `
            }
            else{
                console.log("hello");
                
                solutionTab.innerHTML+=`
               <div class="ai-1 migr">
                                                
                    <div class="mig-1" id="slTabHd">
                        <h4>${single.slHead}</h4>
                        <span><i class="fa-solid fa-angle-down fa-s" style="color: #2e2e2e;"></i></span>
                    </div>
                    
                    <div class="ai-body hide">  
                        <div class="ai-body-in">
                            <div class="build"><h4>${single.slCont}</h4></div>
                            <div class="explore">
                                <div class="ex"><a href="">${single.slTag}</a></div>
                                <div class="ex-img">
                                    <img src="${single.slImg}" alt="">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                `
            }
        })
        const solutionTabBody=document.querySelectorAll(".ai-body")
        const solutionTabHeads=document.querySelectorAll("#slTabHd")
        console.log(solutionTabHeads);
        solutionTabHeads.forEach((solTabHd,idx)=>{
            solTabHd.addEventListener("click",()=>{
                removeSlHide()
                solutionTabBody[idx].classList.toggle("hide")
            })
        })
        function removeSlHide(){
            for (let i = 0; i < solutionTabBody.length; i++) {
                solutionTabBody[i].classList.add("hide")
                
            }
        }

            
        

        
    }
 
// importing data to solutions // importing data to solutions//



// Importing data to product and services tab // Importing data to product and services tab
let product
getDataProducts()

async function getDataProducts(){
    const res= await fetch("./data.json")
    const {productAndService}= await res.json()
    product=productAndService
    
    showProductAll(productAndService,0)
}

const productBtns=document.querySelectorAll("#prBtn")
const prodHideBox=document.querySelector("#productHideBox")
productBtns.forEach((prBtn,index)=>{
    prBtn.addEventListener("click",()=>{
        removePrActive()
        prBtn.classList.toggle("active")
        if(prBtn.classList.contains("active")){
            showProductAll(product,index)
        }
    })
})  
function removePrActive(){
    for (let i = 0; i < productBtns.length; i++) {        
        prBtn[i].classList.remove("active")
    }
}


function showProductAll(prod,ind){
    const prodArrays= Object.keys(prod).map(key => ({ key, value: prod[key] }));
    const prodArray=prodArrays[ind].value
    const productMainBox=document.querySelector("#productMainBox")
    const productBox=document.querySelector("#productBox")


    console.log(prodArray);      
    prodArray.forEach((prdArr,idxx)=>{
           console.log(prdArr,idxx);
          
        if(idxx==0){
            productMainBox.innerHTML=`
            <div class="pro-box-1-in">
                <div class="yel-back">
                    <div class="yel-img">
                        <img src="${prdArr.prImg}" alt="">
                    </div>
                </div>
                <div class="yel-cont">
                    <h2>${prdArr.prHead}</h2>
                    <p>${prdArr.prCont}</p>
                    <a href="" class="explore-1"><span>Explore the product</span></a>
                </div>
            </div>
            `
            productBox.innerHTML=""      
        }
        else{
            
            productBox.innerHTML+=`
        <div class="small-box">
            <div class="small-box-in">
                <div class="small-head">
                    <div class="dd-icon"><img src="${prdArr.prImg}" alt=""></div>
                </div>
                <div class="small-body">
                    <span class="virtual">${prdArr.prHead}</span>
                    <span class="depl">${prdArr.prCont}</span>
                    <a href="">Explore the Product</a>
                </div>             
            </div>
        </div>
            `
        }           
    })
  
}

// Importing data to product and services tab // Importing data to product and services tab//

// Importing data to Resource by role // Importing data to Resource by role 
let resource
getDataRes()

async function getDataRes() {
    const res=await fetch("./data.json")
    const data=await res.json()
    resource=data.resource   
    showResTabs(resource,0) 
    
}



const resourceBtns=document.querySelectorAll(".sl-1")

resourceBtns.forEach((resBtn,idx)=>{
     resBtn.addEventListener("click",()=>{
        console.log(resBtn);
        removeHoverLine()
        const hoverLine=resBtn.querySelector(".ind")
        hoverLine.classList.add("active")
        showResTabs(resource,idx)
   
        
     })
   
})

function removeHoverLine(){
    for (let i = 0; i < resourceBtns.length; i++) {
       const a=resourceBtns[i].childNodes
        console.log(a);
        c= a[0].childNodes[1]
        console.log(c);
        c.classList.remove("active")
        
        
        
       
        
    }
}

const resBox=document.querySelector("#resBox")

function showResTabs(data,index) {
    let dataIn=data[index]
    console.log(dataIn);
    
    resBox.innerHTML=`
        <div class="opt-head">
            <div class="opt-h3"><h3>${dataIn.resHead}</h3></div>
            <div class="opt-arr">
                <span class="rg-cont">
                    <span class="right-arrow"><i class="fa-solid fa-chevron-right fa-xs"></i></span>
                </span>
                <span class="spp">${dataIn.resBtn}</span>
            </div>
        </div>
        <div class="opt-body">
            <div class="opt-body-img">
                <img src="${dataIn.resImg}" alt="">
            </div>   
        </div>
    `
}

// Importing data to Resource by role // Importing data to Resource by role ///

// Importing data to Cutomer stories // Importing data to Cutomer stories 
let storiesdata
let takedata
getDataStories()
async function getDataStories() {
    const res=await fetch("./data.json")
    const {stories,take}=await res.json()
    storiesdata=stories
    takedata=take
    showStoriesTab(storiesdata)
    showTakeData(takedata)
    
    
}





const storiesLogo=document.querySelector("#storiesLogo")
const storiesMainBox=document.querySelector("#storiesMain")
function showStoriesTab(datas){
    console.log(datas);
    
    
    datas.forEach((data,index)=>{
        console.log(data,index);
        const divBox=document.createElement("div")
        divBox.innerHTML=
        `
            <div class="cs-str-tl-t" id="${data.id}">
                <div class="cs-str-img">
                    <div class="cs-str-img-wr">
                        <img src="${data.mainImg}" alt="">
                    </div>
                </div>
                <div class="cs-str-bd">
                    <div class="cs-bd-tp">
                        <div class="cs-bd-tp-img">
                            <div class="tp-img">
                                <img src="${data.icon}" alt="lego">
                            </div>
                        </div>
                        <div class="lego">
                            <p>${data.head}</p>
                        </div>
                    </div>
                    <div class="cs-bd-bt">
                        <div class="cs-bd-bt-tp">
                            <p>Products</p>
                            <div class="azr-edg" id="productTag">
                             
                                
                            </div>
                        </div>
                        <div class="cs-bd-bt-btn">
                            <a href="" class="case-btn"><span>Case study</span></a>
                        </div>
                    </div>
                </div>
            </div>

        `
        storiesMainBox.append(divBox)
        divBox.classList.add("newCover")

        addingProductsDet(data.product,index)

     
        if(index===0){
            storiesLogo.innerHTML=`
              <div class="img-5-wr">
                    <a href="#${data.id}">
                        <div class="img-5-wrpr">
                            <img src="${data.icon}" alt="Logos">
                            
                        </div>
                        <div class="ind seen active"></div>
                    </a>
                </div>
        `
        }
        else{
            storiesLogo.innerHTML+=`
              <div class="img-5-wr">
                    <a href="#${data.id}">
                        <div class="img-5-wrpr">
                            <img src="${data.icon}" alt="Logos">
                            
                        </div>
                        <div class="ind seen"></div>
                    </a>
                </div>
        `
        }
        
    })
    
}

function update(){
   
    
    const scrollDivs=document.querySelectorAll(".cs-str-tl-t")
    const scrollBtns=document.querySelectorAll(".seen")
    console.log(scrollBtns);
    
    let activeIndex=-1

    scrollDivs.forEach((scrollDiv,idx)=>{
        const rect=scrollDiv.getBoundingClientRect()
        console.log(rect.left,rect.right,idx);
        if (rect.left >= 0 && rect.right <= (window.innerWidth || document.documentElement.clientWidth)) {
            console.log("hello",idx);
            
            activeIndex = idx+1;
        } else if (rect.left < (window.innerWidth || document.documentElement.clientWidth) && rect.right >= 0) {
            activeIndex = idx;
        }
       

    })             
    if (activeIndex !== -1) {
        // Remove active class from all buttons
        scrollBtns.forEach(scrollBtn => scrollBtn.classList.remove("active"));

        // Add active class to the corresponding button
        scrollBtns[activeIndex-1].classList.add("active");
    }


}
storiesMainBox.addEventListener("scroll",()=>{
   update()
})






function addingProductsDet(dataPro,indd) {
    console.log(dataPro,indd);
    const productTags=storiesMainBox.querySelectorAll("#productTag")
            dataPro.forEach((data,ind)=>{
                console.log(data);
                
                productTags[indd].innerHTML+=`
                    <div class="azr-edg-1">
                        <div><img src="${data.iconImg}" alt=""></div>
                        <a href="">${data.iconTag}</a>
                    
                    </div>
                `
            })
}


setTimeout(() => {
    const storiesBtns=document.querySelectorAll(".img-5-wr")

    storiesBtns.forEach((strBtn,index)=>{
        strBtn.addEventListener("click",()=>{
            removeLine()
            const hoverLn=strBtn.querySelector(".ind")
            hoverLn.classList.add("active")
        })
    })
    function removeLine(){
        for (let i = 0; i < storiesBtns.length; i++) {
            const a=storiesBtns[i].querySelector(".ind")
            a.classList.remove("active")    
        }
    }
}, 1000);





// Importing data to Cutomer stories// Importing data to Cutomer stories///








// importing data to TAKE THE NEXT STEP// importing data to TAKE THE NEXT STEP

function showTakeData(data){
    const takeCard=document.querySelector("#takeCards")
    data.forEach((datax)=>{
        takeCard.innerHTML+=`
         <div class="tk-crd">
            <div class="tk-crd-in">
                <div class="tk-crd-tp">
                    <h3>${datax.head}</h3>
                    <p>${datax.cont}</p>
                </div>
                <div class="tk-crd-bt">
                    <div class="sol-down">
                        <span class="rg-cont">
                            <span class="right-arrow"><i class="fa-solid fa-chevron-right fa-xs"></i></span>
                        </span>
                        <span class="spp sp22">${datax.btn}</span>
                    </div>                          
                </div>
            </div>
        </div>
        `         
    })
}
// importing data to TAKE THE NEXT STEP// importing data to TAKE THE NEXT STEP///




// changing of active of buttons in sticky Navbarrrrr

function updateMainScroll(){
    console.log("hi");
    
    const allSection=document.querySelectorAll(".section")
    const leftOneBtns=document.querySelectorAll(".left-1-1")
    
    
    console.log(allSection);
    let activeIndex
    allSection.forEach((section,indx)=>{
        const rect=section.getBoundingClientRect()
        
        console.log("hi guys",rect,indx);
    if (rect.top < (window.innerHeight || document.documentElement.clientHeight) && rect.bottom >= 0) {
            activeIndex = indx;       
            const leftMain=document.querySelector("#leftMain")           
            const headingLeft=section.querySelector(".heading").textContent.toLowerCase()
            headingLeftMain=headingLeft[0].toUpperCase()+headingLeft.slice(1).toLowerCase()

        }   
       
               
    })     
    
    if (activeIndex !== -1) {
        leftOneBtns.forEach(leftone => leftone.classList.remove("active"));
        leftOneBtns[activeIndex].classList.add("active");
       
        const style={
            fontFamily:"one",
            fontSize:"14px",
            color:"#004275",
            fontWeight:"600"        
        }
        Object.assign(leftMain.style, style)

        leftMain.innerHTML=headingLeftMain
       

    }     
}

window.addEventListener("scroll",()=>{
    updateMainScroll()
})
// changing of active of buttons in sticky Navbarrrrr//////                                         


// next and previous button// next and previous button

const nextBtn=document.querySelector("#next")
const prevBtn=document.querySelector("#prev")
console.log(storiesMainBox);


    
    nextBtn.addEventListener("click",()=>{
        console.log("hi");
        storiesMainBox.scrollTo=100            
       
    
    })     

    prevBtn.addEventListener("click",()=>{
       
      console.log('hello');
      
      storiesMainBox.scrollLeft=100
    })
    
   
// next and previous button// next and previous button///  
  
  

