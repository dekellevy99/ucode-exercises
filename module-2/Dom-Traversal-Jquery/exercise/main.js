$(".generator").on("click", function(){
    let processorElem = $(this).closest(".processor");
    let computerElem = $(this).closest(".computer");

    let processorId = processorElem.attr("id");
    let computerDataId = computerElem.data().id;
    let bus = computerElem.find(".BUS").text();

    console.log(`processor id = ${processorId}`);
    console.log(`computer data id = ${computerDataId}`);
    console.log(`bus = ${bus}`);
})

$(".validator").on("click", function(){
    let computerElem = $(this).closest(".computer");
    let processorElem = computerElem.find(".processor");

    let generatorContent = processorElem.find(".generator").text();
    let mb = computerElem.find(".MB").text();
    let qrs = processorElem.find(".generator").siblings();

    console.log(`generator content = ${generatorContent}`);
    console.log(`MB = ${mb}`);
    console.log(`QR = ${$(qrs[0]).text()}, ${$(qrs[1]).text()}`);
})