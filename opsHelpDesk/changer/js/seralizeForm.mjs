// call this function with the element that contains all the blocks
export function getDataFromForm(root){

    console.log("Playbook Data Submitted");

    const allBlockData = []

    const pageData = getPageDataFromRoot(root)

    let order = 0

    for( let block of root.querySelector("#container").querySelectorAll("form")){
        const blockData = getDataFromBlock(block)
        const blockDataWithPageData = joinBlockAndPageData(pageData,blockData, order)
        allBlockData.push(blockDataWithPageData)

        order++
    }

console.log(allBlockData);
const options = {
    method: 'POST',
    body: allBlockData,
    headers: {
        "Content-Type": "application/json"
    },
};

fetch('/api', options)

function joinBlockAndPageData(pageData, blockData, order){
    return Object.assign( {}, pageData, blockData, {order })
}

function getPageDataFromRoot(root) {
    const pageTitle = getPageTitle(root)
    const tabVal = getTabVal(root)
    const teamPage = getTeamVal(root)
    const troubleshootingVal = getTroubleshootingVal(root)
    return {
        pageTitle,
        tabVal,
        teamPage,
        troubleshootingVal
    }
}

function getDataFromBlock(block){
    const type = getTypeFromBlock(block)
    const title = getTitleFromBlock(block)
    const textContent = getTextContentFromBlock(block)
    const photo = getPhotoFromBlock(block)
    const videoLink = getVideoLinkFromBlock(block)
    return {
        type,
        title, 
        textContent,
        photo,
        videoLink
    }
}
//Page Data

function getPageTitle(root) {return root.querySelector(".pageTitle").value}
function getTabVal(root) {return root.querySelector(".tabVal").value}
function getTeamVal(root) {return root.querySelector(".teamVal").value}
function getTroubleshootingVal(root) {return root.querySelector(".troubleshootingVal").value}


//Block Content
function getTypeFromBlock(block) { return block.querySelector(".content-type").value}
function getTitleFromBlock(block) { return block.querySelector(".heading").value }
function getTextContentFromBlock(block) { return block.querySelector(".editor").value}
function getPhotoFromBlock(block) { return block.querySelector(".photo").value}
function getVideoLinkFromBlock(block) {return block.querySelector(".videoLink").value}

}


