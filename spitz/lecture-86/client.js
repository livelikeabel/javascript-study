const viewmodel = ViewModel.get({
    isStop: false,
    changeContents() {
        this.wrapper.styles.background = `rgb(${parseInt(Math.random()*150) + 100})`
        this.contents.properties.innerHTML = Math.random().toString(16).replace(".", "")
        binder.render(viewmodel);
    },
    wrapper: ViewModel.get({
        styles: {
            width: "50%",
            background: "#ffa",
            cursor: "pointer"
        },
        events: {
            click(e, vm){
                vm.isStop = true;
            }
        }
    }),
    title: ViewModel.get({
        properties: {
            innerHTML: "Title"
        }
    }),
    contents: ViewModel.get({
        properties: {
            innerHTML: "Contents"
        }
    })
});


const scanner = new Scanner;
const binder = scanner.scan(document.querySelector("#target"));
binder.render(viewmodel);

const f =_=>{
    viewmodel.changeContents();
    binder.render(viewmodel);
    if(!viewmodel.isStop) requestAnimationFrame(f);
};
requestAnimationFrame(f);
