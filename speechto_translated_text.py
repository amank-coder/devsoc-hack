
import speech_recognition as spr
from googletrans import Translator
import os

# Create Recognizer() class objects called recog1 and recog2
recog1 = spr.Recognizer()
recog2 = spr.Recognizer()

# Create microphone instance with device microphone chosen whose index value is 0
mc = spr.Microphone(device_index=0)

# Capture voice
with mc as source:
    print("Speak 'Hello' to initiate the Translation!")
    print("----------------------------")
    audio = recog1.listen(source)

# Based on speech, translate the sentence into another language
if 'hello' in recog1.recognize_google(audio):
    recog1 = spr.Recognizer()
    translator = Translator()
    from_lang = 'en'
    to_lang = 'hi'
    with mc as source:
        print('Speak a sentence...')
        audio = recog2.listen(source)
        get_sentence = recog2.recognize_google(audio)
        
        try:
            get_sentence = recog2.recognize_google(audio)
            print('Phrase to be Translated: '+ get_sentence)
            text_to_translate = translator.translate(get_sentence, src=from_lang, dest=to_lang)
            translated_text = text_to_translate.text
            
            # Write translated text to a text file
            output_file_path = r"C:\Users\Rahul Gupta\Downloads\tranlated.txt"
            with open(output_file_path, "w", encoding="utf-8") as output_file:
                output_file.write(translated_text)
            
            print("Translated text saved to:", output_file_path)
            
        except spr.UnknownValueError:
            print("Unable to understand the input")
        except spr.RequestError as e:
            print("Unable to provide required output".format(e))
