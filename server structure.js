import { Scanner } from '../../api/blocks/blocks.js';
import { sanitizeUrl } from '@braintree/sanitize-url';
import { Operators } from '/imports/api/transactions/transactions.js';

if (validatorsCount == 0){
    console.log("no validators");
    
}

let blocksCount = Blockscon.find({}).count();
console.log(blocksCount);


        if (querys.get('recipe_id') !== null && querys.get('cookbook_id') !== null && querys.get('address') !== null ) {
            
            const recipe_id = sanitizeUrl(querys.get('recipe_id'));
            const cookbook_id = sanitizeUrl(querys.get('cookbook_id'));
            let recipesUrl = sanitizeUrl(`${Meteor.settings.remote.api}/pylons/recipe/${cookbook_id}/${recipe_id}`);
            
            try { 
                
                let response = HTTP.get(recipesUrl);
                selectedRecipe = JSON.parse(response.content).recipe;
                
                
            } catch (e) { 
                console.log("Error in get recipe",e);
            }
