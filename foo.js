var moment = require('moment')
var _ = require('lodash')





datas = _.groupby();

datas ={ 
	2015-01-21: [{},{}],
	2015-01-20: [{},{}]
}
keys = _.keys(datas)

keys =[2015-01-21, 2015-01-20]


arr = []
  for(date in datas){
  	var sum = 0
  	for(var i = 0; i < datas[date].length; i++){
  		if(datas[date][i].type == 'Income'){
  			sum += datas[date][i].value
  		} else {
  			sum -= datas[date][i].value
  		}
  	}

  	arr.push(sum)

  }
keys = ['2015-01-21','2015-01-20']
arr = [100,200]