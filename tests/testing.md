### Testing Strategy

Ne kemi përdorur një qasje të testimit të bazuar në testim të njësive dhe integrim. Për të verifikuar funksionalitetin e API-së, kemi testuar secilën metodë të shërbimit për veprime të vlefshme dhe të pavlefshme. Përveç testimit të njësive, kemi realizuar gjithashtu testime integrimi për endpoint-et e API-së.

- **Testim i njësive (Unit Tests):** Kemi testuar metodat individuale të shërbimeve për të verifikuar që ato sjellin rezultatet e dëshiruara.
- **Testim integrimi:** Testet integruese janë krijuar për të verifikuar funksionimin e API-së duke simuluar kërkesa HTTP dhe duke verifikuar përgjigjet.

### AI-Assisted Testing Process

Kam përdorur dy mjete kryesore AI: **ChatGPT** dhe **GitHub Copilot** për të krijuar testet.

- **ChatGPT**: Kjo ka ndihmuar në krijimin e testeve për funksionet e shërbimit. Për shembull, kam përdorur kërkesën: 
  "Generate unit tests for the `getAllProducts` method in the `ProductService` class, including filtering by category and price range."
- **GitHub Copilot**: Ka sugjeruar automatizimisht mënyra për të testuar metoda si `getProductById` dhe ka ndihmuar me krijimin e mock-ove për funksionet.

**Shembuj të kërkesave (prompts)**:
- "Write unit tests for `getProductById` handling valid and invalid product IDs."
- "Create integration tests for creating a new product, including validation checks."

### Test Coverage Analysis

Për të analizuar mbulimin e testeve, kam përdorur komandën:

```bash
npm run test:coverage


### 4. **Challenges and Solutions**

Këtu duhet të përshkruash çdo sfidë që ke hasur gjatë testimit dhe mënyrën se si e ke zgjidhur.

#### Hapat:
1. **Përshkrimi i sfidave**: Çfarë probleme hasur gjatë krijimit të testeve, si për shembull AI që ka bërë thjeshtime të padëshiruara.
2. **Zgjidhje**: Si i ke zgjidhur këto probleme, si p.sh., duke shtuar teste të reja, duke modifikuar mock-ët, ose duke rregulluar kërkesat për AI.

**Shembull:**
```markdown
### Challenges and Solutions

- **Sfidë:** AI shpesh krijonte vetëm teste për "happy path" dhe nuk mbulonte mjaftueshëm edge cases.
- **Zgjidhje:** Krijova më shumë teste manuale që mbulonin skenarë të tillë si mungesa e fushave të kërkuara, ID të pavlefshme për produktet dhe fjalëkalime të gabuara.

### Learnings

- **Përdorimi i AI në testim:** AI ka ndihmuar të krijojmë teste më shpejt dhe më me saktësi për metoda të njohura, por ai ka nevojë për përmirësime dhe rishikime manuale.
- **Praktikat më të mira:** Përdorimi i AI është i dobishëm për testet e thjeshta dhe ato të bazuara në regulla të paracaktuara, por për raste të komplikuara, duhet të ndërhyjmë manualisht.

### Test Coverage Screenshot

![Test Coverage Report](c:\Users\lenovo\Downloads\Screen.1.png)
(c:\Users\lenovo\Downloads\numer2.png)