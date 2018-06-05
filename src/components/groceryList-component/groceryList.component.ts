import { Component } from '@angular/core';
import {} from '../../assets/images/'

@Component({
  selector: 'app-grocery-list',
  templateUrl: './groceryList.component.html',
  styleUrls: ['./groceryList.component.scss']
})
export class GroceryListComponent {
  title = 'Grocery List';
  categoryTitle= 'Category: ';
  itemTitle= 'Item: ';
  typeTitle= 'Type: ';
  brandTitle= 'Brand: ';
  qtyTitle= 'Quantity: ';


  // variable contains grocery list data
  grocerys = [
    {
      'category': 'fruit',
      'item': 'apples',
      'type': 'Honey Crisp',
      'brand': 'Little cuties',
      'qty': 10
    },
    {
      'category': 'beverage',
      'item': 'milk',
      'type': '2%',
      'brand': 'generic',
      'qty': '1 gallon'
    },
    {
      'category': 'pasta',
      'item': 'Pasta',
      'type': 'Penne',
      'brand': 'Barilla',
      'qty': 3
    },
    {
      'category': 'dessert',
      'item': 'Gelatin dessert',
      'type': 'Green',
      'brand': 'Jello',
      'qty': 3
    },
    {
      'category': 'dairy',
      'item': 'Yogurt',
      'type': 'Assorted flavors',
      'brand': 'Chobani',
      'qty': 12
    },
    {
      'category': 'pasta',
      'item': 'Pasta',
      'type': 'Linguini',
      'brand': 'Barilla',
      'qty': 3
    },
    {
      'category': 'beverage',
      'item': 'Apple juice',
      'type': 'regular',
      'brand': 'Happy Farms',
      'qty': 2
    },
    {
      'category': 'beverage',
      'item': 'Vodka',
      'type': 'Tangerine',
      'brand': 'Grey Goose',
      'qty': 1
    }
  ];

  // below function is used fetch icon images.
  private getIconUrl(type: string): string {
    let url: string;
    if (type.toLowerCase()) {
      switch (type.toLowerCase()) {
        case 'fruit':
          url = 'assets/images/fruit.svg';
          break;
        case 'dairy':
          url = 'assets/images/dairy.svg';
          break;
        case 'beverage':
          url = 'assets/images/beverage.svg';
          break;
        case 'pasta':
          url = 'assets/images/pasta.svg';
          break;
        case 'dessert':
          url = 'assets/images/dessert.svg';
          break;
        default:
          url = 'assets/images/defaultImg.svg';
          break;
      }
    }
    return url;
}
}
