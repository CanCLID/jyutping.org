---
title: "Why should we use Jyutping instead of other Cantonese romanizations?"
linkTitle: "Why should we use Jyutping instead of other Cantonese romanizations?"
url: "/en/blog/scheme"
weight: 2
description: >
  This is a frequently asked question: Why should I choose Jyutping instead of Yale or other Romanizations? This article will explain in depth, why you should use Jyutping and stop using other romanization systems.
---

{{< schemeaudio >}}

## The design principles for romanization systems

Cantonese uses Chinese characters (a.k.a. Han characters, or Sinogram) as its writing system. However, Chinese characters are logographic, not phonographic. So we need a phonographic transcription system to represent the sounds of Cantonese. Such a system is called a romanization system. Therefore, the first priority of a romanization system is to accurately transcribe the phonology, or the sound system of a language. Additionally, in our 21th century Internet era, romanization systems are also useful in making input methods(IME) and other digitization tools. Starting from these utility concerns, we can summarize a set of principles and criteria for designing a romanization system. We will dive into these principles, examine some extant Cantonese romanization systems accordingly, and explain why Jyutping should be our choice.

### Principle #1："One symbol to one phoneme mapping"

To accurately represent the phonology of a language, a Romanization system should strictly follow the rule: **one symbol always maps to only one phoneme and vice versa**. If one symbol can map to multiple phonemes, or one phoneme can be represented by multiple symbols in a romanization system, we can say that this system is inconsistent, unable to represent the phonology both accurately and concisely.

One familiar example is the Mandarin Pinyin. In Pinyin, letter e is a phonemic transcription. It is pronounced /ɤ/ when preceded by initials g, k, h, and pronounced /e/ in the final ie, However, in Pinyin, initials j q x are phonetic transcriptions. They share the same phonemes with g k h, which means, the same phonemes can be represented by either g k h or j q x. Pinyin transcribes sounds both phonemically and phonetically. This introduces inconsistency and violates our first principle.

Principle #1 also implies another rule of thumb: the sound that a symbol represents **should not depend on that symbol's environment** (the symbol that precedes it and the one that follows it). One good example is the Yale romanization for Cantonese. In Yale, the letter _a_ can represent two vowel phonemes, /a/ and /ɐ/. The table below shows the Yale romanizations for three characters 花 翻 分. We can see that in open syllable (syllables that don't end with consonants) characters, which is the character 花 in this case, letter a represents the vowel /a/. While in closed syllable characters, it represents another vowel phoneme /ɐ/ (分 in the table). This is what we call "one symbol _a_ maps to two phonemes /a/ and /ɐ/". Similarly, 花 and 翻 share the same vowel /a/, but in 花 it is transcribed as _fa_ while in 翻 it is _faan_, which is "one phoneme /a/ can be represented by two symbols _aa_ and _a_".

| 花 /a/ {{< audio id="faa1" >}} | 翻 /a/ {{< audio id="faan1" >}} | 分 /ɐ/ {{< audio id="fan1" >}} |
| ------------------------------ | ------------------------------- | ------------------------------ |
| fa                             | faan                            | fan                            |

所以耶魯呢度就係「依賴環境嚟確定一個符號實際代表咩音」，符號 a 究竟代表 /a/ 定係 /ɐ/ 要靠係開音節定閉音節嚟判斷（後邊有跟個 n 嘅話就係 /ɐ/，乜都冇就喺 /a/）。呢個就係耶魯嘅設計缺陷之一。粵拼統一規定 aa 就係 /a/，a 就係 /ɐ/ ，唔使睇環境直接就可以確定係咩音。

Hence, Yale romanization is a perfect example of "the sound of a symbol depends on its environment". Whether the letter _a_ means /a/ or /ɐ/ depends on whether the syllable is a open or closed one. This creates a lot of ambiguities and inconsistencies and it is also one of the critical flaws of the Yale Romanization system. In Jyutping, /a/ is always transcribed as **aa** and **a** always represents /ɐ/, regardless of the environment.

### Principle #2: Avoid using non-ASCII characters.

A romanization system should try to limit its symbol usage to [ASCII codes](https://en.wikipedia.org/wiki/ASCII) (American Standard Code for Information Interchange) only. In other words, the system should try to use the 26 English letters and Arabic numbers only, and avoid using diacritics like ´ˋˇ˘˜.

A perfect example is the ü in Mandarin Pinyin. We all know how troublesome it is to type the letter *ü* with American keyboards. Most people have to look for a special character input app to type it. Aside from being troublesome, *ü* does not belong to the ASCII code set, which means it can't be encoded in the simplest form (unless you transcode it into *v*). This increases both the memory usage and the risk of bugs. Pinyin also uses diacritics like ˉˊˇˋ to mark the tones, which are like the *ü*, not supported by the ASCII encoding.

We know that romanization systems have another important use case, which is making input method software. 

我哋要儘量令一套拼音方案凈使用 [ASCII 字符集](https://zh-yue.wikipedia.org/wiki/ASCII)（美國資訊交換標準代碼）入邊嘅字符，即係要儘量齋用廿六個英文字母加數字就表達晒成個方案，唔好用 ´ˋˇ˘˜ 呢啲符號。呢個係出於信息時代方便信息處理考慮嘅，因爲噉樣可以避免好多潛在問題同 bug。

一個最熟悉嘅例子，就係普通話拼音入邊嘅 ü。相信大家都清楚打呢個 ü 有幾麻煩，估計大家平時打呢個符號都係網上複製粘貼落嚟嘅。用 ü 呢個符號除咗輸入麻煩之外，仲有個問題就係佢唔喺 ASCII 字符集入邊，所以冇辦法用最簡方式嚟編碼（轉成 v 係另一回事），噉樣一嚟用非 ASCII 編碼會增加內存佔用，二嚟編碼轉換個陣有可能會出現各種 bug。同樣嘅，普通話拼音用 ˉˊˇˋ 四個符號嚟標註聲調，輸入唔方便亦都容易出錯。當然呢個係因爲普拼方案喺上世紀五十年代設計，個陣電腦仲未普及，所以呢處疏忽都係正常嘅。

另一方面，我哋知道拼音方案仲有一個用途就係攞嚟做拼音輸入法。如果一個拼音方案到處都係 ˉˊˇˋ，大家又點打字呢？好彩普通話拼音入邊呢啲符號凈係用嚟表示聲調，而普通話拼音輸入法就算唔打聲調都係冇問題嘅。如果話呢啲符號唔單只用嚟表示聲調，仲要攞嚟區分輔音元音，好似 â ä ô ö û ü 噉嘅話就大鑊嘞，拼音輸入法可能會麻煩到大家都唔想用。

### 原則三：符號選擇儘量符合大衆習慣

呢條原則嘅意思係，選擇字母嚟對應發音個陣，要儘量符合大家嘅既有認知，例如字母 a o e 一般用嚟表示元音，b p m f 表示脣音等等。一個比較出名嘅反例就係切洛基語嘅書寫系統，佢用字母 Ꭰ 嚟表示發音 /a/，字母 Ꮃ 表示發音 /la/，呢個就好反直覺嘞。再例如話普通話拼音嘅 q 代表發音 /t͡ɕʰ/，呢個就唔符合英語人士嘅習慣。因爲英文入邊 q 一般表示 /k/，所以西方人學普通話拼音個陣，第一眼見到個 q 就容易下意識噉發成個 /k/ 音，要花一段時間先適應到過嚟。

粵拼經常畀人批評用字母 j 嚟表示個發音 /j/ {{< audio id="jaa1" >}}，就係因爲違背咗呢條原則，因爲大家都習慣咗用字母 y 嚟代表個發音 /j/，用 j 嚟表示就好唔習慣。關於呢一點[下面](#關於-j-同-y)會詳細解釋。

### 原則四：準確反映語言音位系統

呢條可以講係最重要嘅設計原則，但亦都係最麻煩最容易出問題嘅。因爲音位分析有一定嘅主觀性，有時無法將一門語言嘅音位系統完全確定落嚟。最熟悉嘅例子就係普通話，目前學術界對語普通話嘅元音音位數量仲未有一致共識（例如是否考慮埋兒化音又會影響個分析結果）。所以呢啲差異都會直接影響到拼音方案嘅設計，有時甚至會影響到拼音方案嘅表達能力，嚴重嘅話會導致個方案冇辦法表示一啲音。

要注意嘅係，呢一條原則有時係同第一條原則相衝突嘅。譬如英語入邊嘅 h 同 ng 音互補，可以夾硬歸納成同一個音位然後用同一個字母嚟表示，但係噉樣就會好反直覺唔適合大衆使用。呢種原則一同原則三取捨嘅問題，我哋會喺下面嘅例子中遇到。

## 其他粵語拼音方案嘅缺陷

明白咗拼音方案嘅設計原則之後，我哋就可以逐個嚟睇最出名嘅幾個粵語拼音方案：耶魯拼音、教育學院拼音方案（教院式拼音）、廣州話拼音方案（饒秉才方案），分析下佢哋有咩設計問題，從而證明點解我哋要揀粵拼。

### 耶魯拼音

耶魯拼音算係除咗粵拼之外最常見嘅粵語拼音方案嘞。同粵拼相比主要有下面幾個區別：

1. 耶魯拼音中，/a/ 喺開音節用 a 表示，閉音節用 aa。/ɐ/ 喺閉音節中用 a 表示，無法表示開音節 /ɐ/。
2. 耶魯拼音用 j ch y 嚟代表 /ts/、/tsʰ/、/j/ 三個音。因此元音 /yː/ 需要用 yu 嚟表示。
3. 耶魯方案唔區分 /ɵ/ 同埋 /œ/，兩者都用 eu 嚟表示。亦都因爲噉耶魯拼音無法表示 /ɛːu/ 呢個音。
4. 耶魯用附加符號 ˉˊ 同埋字母 h 嚟表示聲調（新版本加入咗數字標調）。

首先第一點我哋已經喺[上文](#原則一一個符號對應一個音位)講過。耶魯拼音噉樣設計，係因爲當年嘅音位分析認爲開音節 /ɐ/ 並唔存在，所以乾脆將開音節 aa 都縮寫成 a。噉一縮寫法就出問題嘞，首先佢違背咗我哋嘅第一條原則「一個符號嚴格對應一個音位」，令學習者困惑提高掌握成本。然後佢噉導致無法表示開音節嘅 /ɐ/ 字，例如語氣詞「嘞」，違背咗原則四。所以呢個係個好大嘅設計缺陷。

第二條入邊，耶魯拼音用咗 yu 嚟表示 /yː/，又係違背咗第一條「一個符號對應一個音位」嘅原則，因爲佢需要根據佢嘅環境嚟判斷實際發乜音。首先耶魯拼音已經用咗 y 嚟代表 /j/、u 代表 /u/，而家又規定 yu 組合起身變成 /yː/，即係「一隻字母代表一個單元音，兩隻字母組合起身又代表另一個單元音」，噉樣一嚟又係令學習者困惑，二嚟都唔方便電腦信息處理（輸入法難以處理簡拼、寫正則表達式都要加入環境判斷）。而粵拼方案對於呢個問題嘅處理，我哋會喺最尾嘅[粵拼缺陷](#粵拼嘅缺陷)進一步說明。

第三條，耶魯拼音用 eu 嚟代表 /ɵ/ 同 /œ/，呢個就係原則四入邊講嘅音位分析嘅問題嘞。呢條直接導致咗耶魯拼音冇辦法表示 /œ/ 同 /ɛːu/ 呢啲音，影響咗呢個拼音方案嘅表達能力，就好似下面呢個表噉：

|          | 睡 /sɵi˨/ {{< audio id="seoi6" >}} | 掉 /tɛːu˨/ {{< audio id="deu6" >}} | 𠰲 /œt˨/ {{< audio id="oet6" >}} |
| -------- | ---------------------------------- | ---------------------------------- | -------------------------------- |
| 耶魯拼音 | seuih                              | 無法表示                           | 無法表示                         |
| 粵拼     | seoi6                              | deu6                               | oet6                             |

第四條用附加符號同埋 h 嚟表示聲調，例如「蛇」嘅發音拼成 sèh，係既違背咗原則二，又違背咗原則一，因爲 h 已經用咗嚟表示聲母 /h/。好彩新版耶魯拼音都增加咗用數字嚟表示聲調嘅方案，噉樣對於信息處理係個好大嘅幫助。

所以綜合嚟講，耶魯拼音嘅設計違背咗原則一二四（第三條比較主觀無法定奪），呢啲設計缺陷足以令我哋放棄耶魯拼音改用粵拼。

### 廣州話拼音方案（饒秉才方案）

廣州話拼音方案係 1960 年廣東省政府公佈嘅粵語拼音方案，後嚟喺 1980 年出咗修訂版，因爲係饒秉才教授修訂嘅，所以又稱饒秉才方案。我哋呢度以 1980 年修訂後嘅版本爲準，講解呢個方案有乜設計問題。除咗聲調之外，廣州話拼音方案同粵拼嘅主要區別有以下：

1. 用 e ê é ü 分別表示元音 /ɐ/、/œː/、/ɛː/、/yː/
2. 用 y 表示輔音 /j/，gu、ku 表示 /kʷ/、/kʷʰ/
3. 同時用 z c s 同 j q x 嚟表示 /ts/、/tsʰ/、/s/，兩組其實冇分別，都係表示同一組音位
4. 入聲韻尾用 -b -d -g 表示
5. 唔區分 /ɵ/ 同 /œ/，無法表示粵拼中嘅 oet 音

好顯然，第一點完全違背晒原則二，用咗大量嘅附加符號嚟表示啲元音。噉樣嚴重阻礙咗電腦信息嘅處理，亦都冇辦法用嚟做輸入法。而第三條則違背咗原則一，同一個音位用唔同嘅符號嚟表示。呢條設計當初係爲咗兼容普通話拼音，但其實係完全冇必要嘅，反而仲增加咗困惑度。

而第二同第四點都係比較主觀嘅符號選擇問題，唔可以算缺點。第五條就同前面講嘅耶魯拼音一樣，冇辦法表示粵拼入邊嘅 oet eu 呢兩個音節。所以總嘅嚟講第一同第三點係最嚴重嘅缺陷，呢兩點直接決定咗廣州話拼音方案冇辦法喺信息時代推廣普及。

### 教育學院拼音方案（教院式拼音）

教院式拼音亦都係除咗耶魯粵拼之外好多人用嘅一個粵語拼音方案，除咗聲調之外，佢同粵拼嘅主要區別有以下：

1. 用 dz 同 ts 嚟 表示 /ts/ 同 /tsʰ/
2. 用 y 嚟表示 /y/
3. 唔區分 /ɵ/ 同 /œ/，統一用 oe 表示
4. 用 oey 嚟表示 粵拼中嘅 eoi

總體嚟講，教院式拼音係好接近粵拼嘅，設計都比較科學。第 2 同第 4 條都係主觀上嘅符號選擇問題，唔係缺點。而第 3 點上面都講過嘞。唯獨第一點係一個小缺陷。因爲用 dz 同 ts 除咗兩個字母冗長冇必要之外，仲會影響到輸入法嘅編碼處理。例如好多輸入法都有聲母簡拼功能，如果我打 `ts`，噉應該係識別成「此」呢一隻字嘅聲母，定係「聽寫」呢兩隻字嘅聲母呢？噉樣又增加咗重碼率，提高咗處理成本亦都令輸入法更難用。

### 香港政府粵語拼音 / 郵政式粵語拼音

香港政府粵語拼音（郵政式拼音承襲香港政府拼音）係泛指香港政府用嚟拼寫街道名同人名嘅拼音。因爲佢源於早期西方人用拉丁字母拼寫粵語嘅習慣，所以用都咗好多附加符號，例如 ' 表示送氣，ò 表示 /ou/ ü 表示 /y/ 等等。但係英文入邊唔用得附加符號，所以香港政府嘅公文入邊要刪晒呢啲附加符號，噉就導致咗好多混亂。再加上政府冇規定一定要拼廣州音，唔同人可以用嚟拼自己嘅方音，所以就成日有「同一隻字有幾種拼法」、「一個拼寫可以代表唔同嘅音」，例如：

- 「蔡」有 Choi、Choy、Tsoi 三種拼法
- 「葉」有 yip、ip 兩種拼法
- chun 可以表示「俊」，又可以表示「珍」
- chai 可以表示「柴」，又可以表示「仔」

所以嚴格嚟講，香港政府拼音唔可以算係一個拼音系統，因爲佢連拼音方案嘅最基本功能——準確一致噉表示一門語言嘅發音系統都做唔到，即係話違背晒原則一。所以呢個拼音方案既做唔到字典亦都做唔到輸入法，我哋更加冇理由要用呢隻拼音方案。

## 粵拼嘅缺陷

### 關於 j 同 y

粵拼成日畀人呻得最多嘅，就係個 j 嘞。好多人都問點解唔攞 y 嚟表示 /j/，因爲呢個的確符合大衆嘅習慣，無論係普通話拼音定係英文都係用 y 嚟表示 /j/。噉點解粵拼要違背原則三用 j 嚟代表 /j/，而唔用 y 呢？因爲如果我哋用咗 y 嚟表示 /j/，噉會引出一個問題：廿六個英文字母就得咁多，家陣用咗 y 嚟表示 /j/，噉用乜嚟表示 /y/？

對於呢個問題，耶魯拼音嘅答案係：用 y 表示 /j/，然後用環境判斷咩時候代表 /y/。如果字母 y 後面跟嘅係 u，噉兩個字母 yu 串起身就代表 /y/。呢個就係上文講到嘅「一隻字母代表一個單元音，兩個組合起身又代表另一個單元音」。即係話，**耶魯拼音犧牲咗原則一嚟換取原則三**，所以呢個就係取捨問題嘞。噉邊個原則重要啲？肯定係第一條，「一個符號對應一個音位」最重要。因爲拼音方案嘅根本目的就係準確表示語言嘅音位系統，而且呢個一一對應關係如果打破咗嘅話會帶嚟好多麻煩，例如上文都講過嘅提高學習成本同信息處理成本、容易造成混淆等等。

另一方面，用 j 嚟代表 /j/ 都唔係咩太違背原則三嘅選擇，因爲用 y 嚟代表 /j/ 只不過係普通話拼音同英文嘅書寫習慣。世界上仲有好多語言嘅書寫系統，例如德文都係用 j 嚟代表 /j/ 嘅。所以其實凈係普通話拼音同英文使用者唔適應呢個設計唧，換成德文使用者就會覺得好自然嘞。況且大家都睇到，國際音標入邊呢個音（硬齶近音）嘅符號就係 /j/，所以粵拼噉寫都係遵循國際音標寫法。

### 韻母 yu

如果真係話粵拼有咩真正嘅設計缺陷嘅話，噉的確有一個，就係用兩個字母 yu 嚟表示元音 /y/，顯得冗長冇必要，完全可以單用一個 y 就搞掂又冇副作用。LSHK 當初設計噉用兩個字母，係考慮到大衆習慣同歷史遺留問題（原則三）。不過好消息係，目前市面上嘅粵拼輸入法基本上都支持 y = yu 嘅縮寫，所以大家打字嗰陣如果懶得打 yu 兩個字母，單打一個 y 都係完全冇問題嘅。

關於粵拼嘅設計，LSHK 嘅官網上面都有自己嘅 [FAQ](https://www.lshk.org/faq-on-jyutping)，大家可以參考瞭解設計當初考慮過嘅各種問題。

## 所以

仲所以咩？用粵拼啦！
