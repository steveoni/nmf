## Non negative matrix factorization

it is used to decompose a large matrix e.g document. if we have matrix `A` which is a matrix of corpus. it can be decompose into weight `w` and features 'h'. so the document become

			`A =w X h`


in nfmsklearn, a corpus of document is created from list of different news rss feed and run sklearn nfm on it.

then a file articl.txt contain the topic of the news and the features that it contains in descending order

feture.txt contain the features in array and the topic of each news feed associated with it in descending order.