from sumy.parsers.plaintext import PlaintextParser
from sumy.nlp.tokenizers import Tokenizer
from sumy.summarizers.lsa import LsaSummarizer as Summarizer
from sumy.nlp.stemmers import Stemmer
from sumy.utils import get_stop_words


def SummarizeText(text):
    # f = request.form["test"]

    # url = "https://apnews.com/article/mexico-immigration-united-states-1efbf1f357a5210d2433b48820b9aa54"
    # parser = HtmlParser.from_url(url, Tokenizer(LANGUAGE))
    # or for plain text files
    SENTENCES_COUNT = 5

    parser = PlaintextParser.from_string(text, Tokenizer("english"))
    stemmer = Stemmer(LANGUAGE)

    summarizer = Summarizer(stemmer)
    summarizer.stop_words = get_stop_words(LANGUAGE)

    s = ""
    for sentence in summarizer(parser.document, SENTENCES_COUNT):
        s += sentence._text



    return s
