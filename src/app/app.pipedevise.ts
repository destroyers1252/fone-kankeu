import { Pipe,PipeTransform } from "@angular/core";
@Pipe({
    name:'devisePipe',
})
export class devisePipe implements PipeTransform{
    transform(value: number,startdevise:String,finaldevise:String): String {
        let resultat=""
        let valeur=0
        let symbole=""
        if(symbole==""){
            if(finaldevise=="DOLLARS"){
                symbole="$"
            }else if(finaldevise=="FCFA"){
                symbole="FCFA"
            }else if(finaldevise=="EURO"){
                symbole="EURO"
            }

            if(startdevise=="FCFA" && finaldevise=="DOLLARS"){
                valeur=(((value)/655.9570)*1.134122)
            }else if(startdevise=="FCFA" && finaldevise=="EURO"){
                valeur=((value)/655.9570)
            }else if(startdevise=="EURO" && finaldevise=="DOLLARS"){
                valeur=((value)*1.134122)
            }else if(startdevise=="EURO" && finaldevise=="FCFA"){
                valeur=((value)*655.9570)
            }else if(startdevise=="DOLLARS" && finaldevise=="FCFA"){
                valeur=(((value)/1.134122)*655.9570)
            }else if(startdevise=="DOLLARS" && finaldevise=="EURO"){
                valeur=((value)/1.134122)
            }else if(startdevise=="EURO" && finaldevise=="EURO"){
                valeur=value
            }else if(startdevise=="DOLLARS" && finaldevise=="DOLLARS"){
                valeur=value 
            }else if(startdevise=="FCFA" && finaldevise=="FCFA"){
                valeur=value
            }
        }
        return valeur+" "+symbole;
    }
    
}