function totalPhoneBill(items){
var totalCost = 0
var cost = items.split(', ');
  for( var i=0;i<cost.length;i++){
  if (cost[i].startsWith('s')){
    totalCost += 0.65
  }else{
    totalCost += 2.75
}
}
 return 'R'+totalCost.toFixed(2)     
}
