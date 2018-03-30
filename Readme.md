## Non negative matrix factorization

it is used to decompose a large matrix e.g document. if we have matrix `A` which is a matrix of corpus. it can be decompose into weight `w` and features 'h'. so the document become

			`A =w X h`


in nfmsklearn, a corpus of document is created from list of different news rss feed and run sklearn nfm on it.

then a file articl.txt contain the topic of the news and the features that it contains in descending order

feture.txt contain the features in array and the topic of each news feed associated with it in descending order.

## first cell
We create a list of news rss feed we want to get information, and use stripHTML to remove the html tags and get the content in it `getarticlewords()`  is used to get the content from each news feed pass it into the `stripHTML()`  and pass into `separatewords()` to convert it to array. and return the `articlewords` and `title` 

## 4th cell
convert the article words in array to a bag of word,using `countVectorizer` from `sklearn`. the `max_df=0.95` so that it won,t count word that have more than or `95%` and we want the `min_dif` to be 3. then run `nfm` from `sklearn.decomposition` we transform the data which has being vectorize and pass it into `nfms.fit_transform()` to get the feature and `nfm.components_` to get the feature. note in `nfm()` we set the `no_component` to 20.e.g if the `A` matrix (200x100) and `A = w x h` so using no_component we make `w` to be matrix (200 x 20) and  `h` to be matrix(20 x 100).

## 
