'use strict'

exports.calculate = (data) => {

    let result = [];
    let order = data.items;

    //since already sorted update order and add each warehouse with updated order to result
    data.warehouses.forEach(warehouse => {
        
        let warehouseName = warehouse.name;

        let updatedWarehouse = {};
        updatedWarehouse[warehouseName] = {};

        let capacity = warehouse.inventory;

        //boolean to check if the warehouse is being used
        let used = false;

        for(let key of Object.keys(warehouse.inventory)){
            if(capacity[key] && capacity[key] > 0 && order[key] > 0){
                used = true;
                if(order[key] - capacity[key] >= 0){ 
                    //warehouse has capacity for the whole order
                    order[key] -= capacity[key];
                    updatedWarehouse[warehouseName][key] = capacity[key];
                } else { 
                    //warehouse does not have capacity for the complete order
                    updatedWarehouse[warehouseName][key] = order[key];
                    order[key] = 0;
                }
            }
        }
        
        //Adding to result only if the warehouse is used
        if(used) result.push(updatedWarehouse);
    });
    
    return result;
}
