import { Pipe,PipeTransform } from '@angular/core';
@Pipe({name:'imageFilter'})

export class ImageFilter implements PipeTransform {
    
    transform(imageList:any[], category:string){
        if(category == 'all'){
            return imageList;
        }
        else{
            return imageList.filter( image => image.category == category );
        }
    }
}