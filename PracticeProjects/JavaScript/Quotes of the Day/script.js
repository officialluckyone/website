const quoteText = document.getElementById('quoteText');
const authorName = document.getElementById('authorName');
const generate = document.getElementById('generate');
generate.addEventListener("mousedown",(e)=> {
    let quotesList = ["We cannot solve problems with the kind of thinking we employed when we came up with them.","Learn as if you will live forever, live like you will die tomorrow.","Stay away from those people who try to disparage your ambitions. Small minds will always do that, but great minds will give you a feeling that you can become great too.","When you give joy to other people, you get more joy in return. You should give a good thought to happiness that you can give out.","When you change your thoughts, remember to also change your world.","It is only when we take chances, when our lives improve. The initial and the most difficult risk that we need to take is to become honest."]
    let quoteAuthorList = ['Albert Einstein',"Mahatma Gandhi","Mark Twain","Eleanor Roosevelt","Norman Vincent Peale","Walter Anderson"]
    let randomNum = Math.floor(Math.random() * quotesList.length);
    quoteText.innerHTML = quotesList[randomNum];
    authorName.innerHTML = quoteAuthorList[randomNum];
});