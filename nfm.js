/**
 * @author steveoni
 * non negative matrix 
 * for reduction of dimension
 * using milsushi2.js
 */

$M = require('milsushi2');

var a= $M.jsa2mat([[[1,2,3],[4,5,6]],
                    [[7,8,9],[10,11,12]]]);

//finding euclidean distance between the two matrix
function difcost(a,b){

    var dif = 0;
    for(var i=1;i<$M.size(a,1)+1;i++){
        for(var j=1;j<$M.size(b,2)+1;j++){
            //console.log(j,a.get(1,j));
            dif +=Math.pow(a.get(i,j)-b.get(i,j),2);
        }
    }

    return dif;
}
//dis the main function
//reduce matrix A(m x n) to hw
//A = w x h where  w(m x k) and h(k x n)
function factorize(v,pc=10,iter=50){

    var ic = $M.size(v,1);

    var fc = $M.size(v,2);
    //initialize the weight with random variables
    var in_w = [];
    for(var i = 1;i<ic+1;i++){
        var inn_w=[];
        for(var j=1;j<pc+1;j++){
                inn_w.push(Math.random());
        }
        in_w.push(inn_w);
    }

    var w = $M.jsa2mat(in_w);// create the matrix w (m x k)

    //initialize the features with random variables
    var in_h =[];

    for(var i=1;i<pc+1;i++){
        var inn_h = [];
        for(var j =1;j<fc+1;j++){
            inn_h.push(Math.random());
        }
        in_h.push(inn_h);
    }

    var h = $M.jsa2mat(in_h);// create the matrix h (k x n)

    for(var i=0;i<iter;i++){

        var wh = $M.mtimes(w,h);

        var cost = difcost(v,wh);

        if(i %10==0) console.log(cost);

        if(cost==0) break;//stop iterating if the cost is zero

        //update the weight w and feature h
        // w -> (w*A*h'/w*h*h') for weight
        // h -> (h*A*w'/h*w*w') for features
        var hn = $M.mtimes($M.t(w),v);
        var hd = $M.mtimes($M.mtimes($M.t(w),w),h);

        h = $M.rdivide($M.times(h,hn),hd);

        var wn =$M.mtimes(v,$M.t(h));

        var wd = $M.mtimes($M.mtimes(w,h),$M.t(h));

        w = $M.rdivide($M.times(w,wn),wd);


    }

    return {w:w,h:h};
}



 var b = $M.jsa2mat([[1,2,3],[4,5,6]]);

 var c = $M.jsa2mat([[2,3],[4,5],[6,7]]);

 r = factorize($M.mtimes(b,c),pc=3,iter=100);

 console.log($M.mtimes(r.w,r.h));
