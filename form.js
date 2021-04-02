class Form{

    constructor(){
        this.title = createElement("h1")
        this.subtitle = createElement("h2")
        this.sub2title = createElement("h2")
//        this.foodButton = createButton("Food")
//        this.placeButton = createButton("Places")
//        this.sportButton = createButton("Sport")
    }

    display(){
        this.title.html("Fortune Teller")
//        this.subtitle.html("<center> Click one of the buttons to find <br> out your future related to your selection </center>")
        this.sub2title.html("<center> Think of a number in your head from 1-99.<br> Find the sum of the two digits,<br> and subtract that number from your original number.<br> Find the symbol that represents your number,<br> then click the magic crystal ball...")
//        this.foodButton.position(880, 650)
//        this.placeButton.position(980, 650)
//        this.sportButton.position(1080, 650)

        this.title.position(900, 100)
        this.subtitle.position(800, 450)
        this.sub2title.position(464, 630)

        
/*    this.foodButton.mousePressed(()=>{
        this.hideElements()
    })

    this.placeButton.mousePressed(()=>{
        this.hideElements()
    })

    this.sportButton.mousePressed(()=>{
        this.hideElements()
    })
*/
    }


    hideElements(){
        this.title.hide()
        this.subtitle.hide()
//        this.foodButton.hide()
//        this.placeButton.hide()
//        this.sportButton.hide()
    }

}
