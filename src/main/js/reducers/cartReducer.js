import Item1 from '../../resources/static/assets/img/prod_1.jpg'
import Item2 from '../../resources/static/assets/img/prod_2.jpg'
import Item3 from '../../resources/static/assets/img/prod_3.jpg'
import Item4 from '../../resources/static/assets/img/prod_4.jpg'

import { ADD_TO_CART,REMOVE_ITEM,SUB_QUANTITY,ADD_QUANTITY,ADD_SHIPPING } from '../actions/action-types/cart-actions'


const initState = {
    items: [
        {id:1,title:'Product 1', desc: "1 Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", spec: "Size 11 cm ", price:110,img:Item1},
        {id:2,title:'Product 2', desc: "2 Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", spec: "Size 12 cm ", price:80,img: Item2},
        {id:3,title:'Product 3', desc: "3 Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", spec: "Size 13 cm ",price:120,img: Item3},
        {id:4,title:'Product 4', desc: "4 Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", spec: "Size 14 cm ", price:260,img:Item4}

    ],
    addedItems:[],
    total: 0

}
const cartReducer= (state = initState,action)=>{

    //INSIDE HOME COMPONENT
    if(action.type === ADD_TO_CART){
          let addedItem = state.items.find(item=> item.id === action.id)
          //check if the action id exists in the addedItems
         let existed_item= state.addedItems.find(item=> action.id === item.id)
         if(existed_item)
         {
            addedItem.quantity += 1
             return{
                ...state,
                 total: state.total + addedItem.price
                  }
        }
         else{
            addedItem.quantity = 1;
            //calculating the total
            let newTotal = state.total + addedItem.price

            return{
                ...state,
                addedItems: [...state.addedItems, addedItem],
                total : newTotal
            }

        }
    }
    if(action.type === REMOVE_ITEM){
        let itemToRemove= state.addedItems.find(item=> action.id === item.id)
        let new_items = state.addedItems.filter(item=> action.id !== item.id)

        //calculating the total
        let newTotal = state.total - (itemToRemove.price * itemToRemove.quantity )
        console.log(itemToRemove)
        return{
            ...state,
            addedItems: new_items,
            total: newTotal
        }
    }
    //INSIDE CART COMPONENT
    if(action.type=== ADD_QUANTITY){
        let addedItem = state.items.find(item=> item.id === action.id)
          addedItem.quantity += 1
          let newTotal = state.total + addedItem.price
          return{
              ...state,
              total: newTotal
          }
    }
    if(action.type=== SUB_QUANTITY){
        let addedItem = state.items.find(item=> item.id === action.id)
        //if the qt == 0 then it should be removed
        if(addedItem.quantity === 1){
            let new_items = state.addedItems.filter(item=>item.id !== action.id)
            let newTotal = state.total - addedItem.price
            return{
                ...state,
                addedItems: new_items,
                total: newTotal
            }
        }
        else {
            addedItem.quantity -= 1
            let newTotal = state.total - addedItem.price
            return{
                ...state,
                total: newTotal
            }
        }

    }

    if(action.type=== ADD_SHIPPING){
          return{
              ...state,
              total: state.total + 6
          }
    }

    if(action.type=== 'SUB_SHIPPING'){
        return{
            ...state,
            total: state.total - 6
        }
  }

  else{
    return state
    }

}

export default cartReducer
