import PyPDF2
import json

def extract_pdf_text(pdf_path):
    with open(pdf_path, 'rb') as file:
        pdf_reader = PyPDF2.PdfReader(file)
        text = ''
        for page in pdf_reader.pages:
            text += page.extract_text()
    return text

if __name__ == '__main__':
    pdf_path = 'Enforceability Dichotomy of Emergency Arbitrators- Aprameya Setlur.pdf'
    text = extract_pdf_text(pdf_path)
    
    # Save to JSON file
    with open('aprameya_content.json', 'w', encoding='utf-8') as f:
        json.dump({'content': text}, f, ensure_ascii=False, indent=2)
    
    print("Content extracted successfully!")
