let result = sortWordFreq(wordFrequency("From the moment the first immigrants arrived on these shores, generations of parents have worked hard and sacrificed whatever is necessary so that their children could have the same chances they had; or the chances they never had. Because while we could never ensure that our children would be rich or successful; while we could never be positive that they would do better than their parents, America is about making it possible to give them the chance. To give every child the opportunity to try. Education is still the foundation of this opportunity. And the most basic building block that holds that foundation together is still reading. At the dawn of the 21st century, in a world where knowledge truly is power and literacy is the skill that unlocks the gates of opportunity and success, we all have a responsibility as parents and librarians, educators and citizens, to instill in our children a love of reading so that we can give them the chance to fulfill their dreams."));
printResult(result);


function printResult(result){
    for(let i = 0; i < result.length; i++){
        console.log(result[i].word + " " + result[i].freq);
    }
}

function wordFrequency(input){
    let wordFreq = {}; 
    input = input.split(" ");
    for(let i = 0; i < input.length; i++){
        let word = input[i].toLowerCase();
        word = rmNonAlpha(word);
        if(wordFreq[word] !== undefined){
            wordFreq[word] = wordFreq[word] + 1; 
        } else {
            wordFreq[word] = 1; 
        }
    }
    return wordFreq; 
}

function sortWordFreq(wordFreq){
    if (wordFreq == undefined) return null;
    let wordArr = [];
    for(key in wordFreq){
        wordArr = insertIntoArr(wordArr, key, wordFreq[key]);
    }
    return wordArr; 
}

function insertIntoArr(wordArr, word, freq){
    wordArr.splice(findLoc(wordArr, 0, wordArr.length, word, freq), 0, {word: word, freq: freq} )
    return wordArr;
}
function findLoc(wordArr, start, end, word, freq){
    if(wordArr.length == 0) return 0; 
    if(wordArr.length == 1){
        return wordArr[0].freq > freq ? 1 : 0;
    }
    if(start == end) return start;
    let pivot = parseInt(start + (end - start) / 2, 10);
    if(wordArr[pivot].freq == freq){
        if(wordArr[pivot].word < word){
            if(wordArr[pivot + 1] != undefined){
                if(wordArr[pivot + 1].word > word || wordArr[pivot + 1].freq < freq){
                    return pivot + 1;
                }
                return findLoc(wordArr, pivot, end, word, freq);
            } 
            return pivot + 1;
        }else {
            if(wordArr[pivot - 1] != undefined){
                if(wordArr[pivot - 1].freq > freq || wordArr[pivot - 1].word < word){
                    return pivot;
                }
                return findLoc(wordArr, start, pivot, word, freq);
            }
        }
    } else if(wordArr[pivot].freq < freq ){
        if(wordArr[pivot - 1] != undefined){
            if(wordArr[pivot - 1].freq > freq ){
                return pivot; 
            }
        }
        return findLoc(wordArr, start, pivot, word, freq);
    } else {
        if(wordArr[pivot + 1] != undefined){
            if(wordArr[pivot + 1].freq < freq){
                return pivot + 1; 
            }
        }
        return findLoc(wordArr, pivot, end, word, freq);
    }
}
function rmNonAlpha(word){
    let lastC = word.charAt(word.length - 1); 
    return lastC.charCodeAt(0) < 65 ?  word.slice(0, -1) : word;
}
