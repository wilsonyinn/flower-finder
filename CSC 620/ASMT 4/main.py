import nltk
from nltk.util import bigrams
from nltk.util import everygrams
from nltk.lm import MLE
from nltk.lm.preprocessing import pad_both_ends
from nltk.lm.preprocessing import flatten
from nltk.corpus import gazetteers
from nltk.lm.preprocessing import padded_everygram_pipeline


# nltk.download()

word_list = gazetteers.words()
# padded_bigrams = list(bigrams(pad_both_ends(word_list, n=2)))
# everygrams_list = list(everygrams(padded_bigrams, max_len=2))
# flattend_list = list(flatten(pad_both_ends(sent, n=2) for sent in word_list))
train, vocab = padded_everygram_pipeline(2, word_list)

lm = MLE(2)

lm.fit(train, vocab)

print(len(lm.vocab))
