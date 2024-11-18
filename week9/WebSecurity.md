You can view .md previews by right-clicking the tab and clicking on "Open Preview" or Ctrl+Shift+V

https://www.markdownguide.org/basic-syntax/
# Web Security Lecture
[Web Security Slides](https://drive.google.com/file/d/1hDl4h6nMnARgDQ3vgwYSxIRKLx3x3bRr/view)
### So what? (Potential Security Oversights)
* A lot of potential security oversights come from weak/no user authentication
* **Sanitizing form entries/requests?**
* TRUST SOFTWARE UPDATES. THEY WILL KEEP YOU SAFE FROM EMERGING THREATS.
## Cross-Site Scripting
* This is a type of attack that can be committed on a website.
* Attacker inserts questionable HTML on your webpage.
  * This may allow the attacker to hijack password forms on a webpage to steal user info.
  * **Think of credit card skimmers.**
* How does it work?
  * Attacker creates an addon to the URL of a typical site

## DDoS
* Overwhelming a serve with malicious requests to block regular users
* Happens to video games too. E.g. Rainbow 6 Siege is a pretty common victim of these attacks
### DDoS Mitigation

* Is usually countered by CloudflareCDN or CAPTCHAs
* Rate limiting, which checks if a verification button is clicked a certain number of times.
* Randomly throwing out excess traffic (RISK OF COLLATERAL DAMAGE)
* Distributing the traffic across a wide network
* **You don't need to explain how all thiss stuff works. You just need to explain what it is.**

## "Person-In-The-Middle" attack
* This is when a request/response gets intercepted by an attacker.
  * E.g. You send a private message to Bob but Trudy sees it.
  * This is why encryption is so important.
### Encryption
* All about algorithms that make your online messages private
* **SSL (Security Sockets Layer) will be on the Final**
  * Uses both encryption types
* Don't worry about symmetric keys
* In HTTPS:
  * Data to and from you is encrypted
  * Browser and server agree on a KEY
  * Encryption is based on this KEY
  * Key is then handled by SSL
## Cookies
* They store user preferences. (e.g. "Remember me")
* Benefits for users:
  * User authentication convenience (e.g. "Remember me")
  * Site Preferences
  * Contents of shopping carts
* Benefits for developer
  * "Improving" usage experience
    * (Invasive) Ad tracking
    * Site metrics
* Cookies can be private if needed
## Privacy Policy
* A legal requirement for websites to say what they're doing with your data.
* What information we collect
* How long do we hold it
* Do we delete it
* **Implied consent/agreement**, thus you don't need to sign anything to agree. Just by using the website you are agreeing.