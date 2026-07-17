<div align="center">

<img src="https://capsule-render.vercel.app/api?type=waving&color=0:0078D4,50:512BD4,100:02569B&height=210&section=header&text=Jabulile%20Mashibini&fontSize=55&fontColor=ffffff&animation=fadeIn&desc=%3C%2F%3E%20Software%20Engineer%20%C2%B7%20Cloud%20Native%20%C2%B7%20Mobile%20Dev&descAlignY=75&descSize=20" width="100%"/>

[![Typing SVG](https://readme-typing-svg.demolab.com?font=Fira+Code&weight=600&size=22&pause=1000&color=0078D4&center=true&vCenter=true&width=750&lines=public+class+Jabulile+%3A+ICloudEngineer%2C+ISoftwareDev;10x+Microsoft+Certified+%E2%80%A2+AWS+%E2%80%A2+OCI;Flutter+%2B+ASP.NET+Core+%2B+Azure+%3D+shipped+products;while(alive)+%7B+eat();+code();+deploy();+repeat();+%7D)](https://github.com/Jabulile1704)

[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/jabulile-mashibini)
[![Email](https://img.shields.io/badge/Email-Say_Hello-EA4335?style=for-the-badge&logo=gmail&logoColor=white)](mailto:jabu.mashibs@gmail.com)
[![Portfolio](https://img.shields.io/badge/🌐_Live_Portfolio-Visit-2ea44f?style=for-the-badge&logo=githubpages&logoColor=white)](https://jabulile1704.github.io/JM-Mashibini-Website-Portfolio-/)
[![Profile Views](https://komarev.com/ghpvc/?username=jabulile1704&color=512BD4&style=for-the-badge&label=VISITORS)](https://github.com/Jabulile1704)

</div>

<br/>

## 📂 `src/AboutMe.cs`

```csharp
namespace SouthAfrica.Engineers;

public sealed class JabulileMashibini : ICloudEngineer, IMobileDeveloper, IFacilitator
{
    public string Role     => "Software Engineering Facilitator @ CTU Training Solutions";
    public string[] Clouds => ["Azure ☁️", "AWS ☁️", "OCI ☁️"];   // 12x certified across all three

    public Highlight[] ShippedWork =>
    [
        new("MoTirong",       "Geo-verified biometric attendance platform — GOVERNMENT client 🏛️"),
        new("TiroMoMangaung", "Location-aware job-matching app for my community 🌍"),
        new("AZ-104 Labs",    "Hands-on Azure administration, documented on GitHub 📘")
    ];

    public string Superpower =>
        "I don't just write code — I explain it, document it, and level up teams with it.";
}
```

<br/>

## 🚀 `dotnet build ./FlagshipProjects.sln`

```text
Determining projects to restore...
Restored 2 flagship project(s) in 1.7s ✔
```

### 🕐 [`MoTirong.csproj`](https://github.com/Jabulile1704/motiroong-mobile) — Geo-Verified Staff Attendance Platform &nbsp; ![status](https://img.shields.io/badge/build-in_development-blue?style=flat-square&logo=githubactions&logoColor=white)

> Cross-platform clock-in/clock-out system for a **government client (Mangaung Metro Municipality)** — **mandatory geo-tagging** + **biometric fingerprint verification**, with fallback strategies for workers with worn fingerprints.

![Flutter](https://img.shields.io/badge/Flutter-02569B?style=flat-square&logo=flutter&logoColor=white)
![ASP.NET Core](https://img.shields.io/badge/ASP.NET_Core-512BD4?style=flat-square&logo=dotnet&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-4169E1?style=flat-square&logo=postgresql&logoColor=white)
![Azure](https://img.shields.io/badge/Azure-0078D4?style=flat-square&logoColor=white)
![JWT](https://img.shields.io/badge/JWT_+_Refresh-000000?style=flat-square&logo=jsonwebtokens&logoColor=white)
![GitHub Actions](https://img.shields.io/badge/CI%2FCD-GitHub_Actions-2088FF?style=flat-square&logo=githubactions&logoColor=white)

```diff
+ 📍 Geo-tagged clock-ins with biometric identity verification
+ 🧾 Full engineering docs — ERD, use cases, Swagger/OpenAPI reference, backlog & roadmap
+ 🔒 POPIA (data privacy) compliance baked into the design
+ 🗂️ GitHub Projects sprint boards · branch protection · GitHub Actions CI/CD
```

### 💼 `TiroMoMangaung.dart` — Local Job-Matching Platform &nbsp; ![status](https://img.shields.io/badge/build-passing-success?style=flat-square&logo=githubactions&logoColor=white)

> A Flutter app connecting **job seekers ⇄ employers across the Mangaung Metropolitan Municipality** — a localised platform in the spirit of LinkedIn & Indeed, built for community impact.

![Flutter](https://img.shields.io/badge/Flutter-02569B?style=flat-square&logo=flutter&logoColor=white)
![Firebase Auth](https://img.shields.io/badge/Firebase_Auth-FFCA28?style=flat-square&logo=firebase&logoColor=black)
![Firestore](https://img.shields.io/badge/Cloud_Firestore-FFCA28?style=flat-square&logo=firebase&logoColor=black)
![Dart](https://img.shields.io/badge/Dart-0175C2?style=flat-square&logo=dart&logoColor=white)

```diff
+ 📄 CV uploads & in-app profile management (email, numbers, profile image)
+ 📍 Location-aware listings — see exactly how far each job is from you
+ 🔔 Push notifications + application status tracking (accepted / pending / declined)
+ 🛠️ Admin dashboard for managing listings and applicants
```

### ☁️ [`az104-labs/`](https://github.com/Jabulile1704/azure-virtual-networking) — Azure Administration, Hands-On &nbsp; ![status](https://img.shields.io/badge/docs-published-informational?style=flat-square&logo=github&logoColor=white)

> Practical Azure admin labs — **identity · governance · compute · storage · virtual networking** — documented right here on GitHub.

![Azure](https://img.shields.io/badge/Microsoft_Azure-0078D4?style=flat-square&logoColor=white)
![Entra ID](https://img.shields.io/badge/Microsoft_Entra_ID-0078D4?style=flat-square&logoColor=white)

<br/>

## 🧪 `dotnet test ./Certifications.Tests` — all green ✅

```text
Test run for Certifications.dll (16 tests)

  ✔ Azure_AZ104_AzureAdministratorAssociate ............ PASSED
  ✔ Azure_AZ204_AzureDeveloperAssociate ................ PASSED
  ✔ Azure_AZ140_AzureVirtualDesktopSpecialty ........... PASSED
  ✔ Azure_AZ900_AzureFundamentals ...................... PASSED
  ✔ Security_SC300_IdentityAndAccessAdministrator ...... PASSED
  ✔ Security_SC200_SecurityOperationsAnalyst ........... PASSED
  ✔ Security_SC900_SecurityComplianceIdentity .......... PASSED
  ✔ Data_DP700_FabricDataEngineerAssociate ............. PASSED
  ✔ Data_DP900_AzureDataFundamentals ................... PASSED
  ✔ Data_PL300_PowerBIDataAnalystAssociate ............. PASSED
  ✔ AWS_CertifiedCloudPractitioner ..................... PASSED
  ✔ Oracle_OCI2025_CertifiedAssociate .................. PASSED
  ✔ Cisco_PythonEssentials_1_and_2 ..................... PASSED
  ✔ ISO_27001_2022_ImplementationTraining .............. PASSED
  ✔ ETDP_SETA_RegisteredAssessor ....................... PASSED
  ⏳ Microsoft_CertifiedTrainer_MCT .................... IN PROGRESS

Passed: 15 · In Progress: 1 · Failed: 0 🏆
```

🎓 **Advanced Diploma in Information Technology** — Central University of Technology

<br/>

## 📜 `CHANGELOG.md` — career releases

```markdown
## [v2026.x] — CTU Training Solutions            🟢 CURRENT RELEASE
### Added
- Software Engineering Facilitator — NQF Level 6
- Modules: C#, Java, ASP.NET/.NET, software design & testing
- Git/GitHub workflow training + AZ-204 bootcamp labs (C# / ASP.NET Core)
- SDLC & Agile facilitation, code reviews, learner project mentoring

## [v2025.0] — WWISE
### Added
- Software Development Facilitator
- Python, JavaScript, HTML/CSS, SQL, Web APIs
- Power BI & PowerApps training
```

<br/>

## 📦 `package.json` — the stack

```jsonc
{
  "name": "@jabu/tech-stack",
  "version": "2026.7.0",
  "dependencies": {
    "csharp": "^12.0.0",        // primary — ASP.NET Core Web APIs
    "java": "^21.0.0",          // teach it & build with it
    "dart-flutter": "^3.x",     // cross-platform mobile apps
    "python": "^3.12.0",        // scripting & automation
    "javascript": "ES2024",
    "sql": "*"
  },
  "cloudDependencies": {
    "azure": "expert-track",    // 10x certified
    "aws": "practitioner",
    "oci": "associate",
    "firebase": "auth + firestore"
  },
  "devDependencies": {
    "github-actions": "ci/cd",
    "github-projects": "sprint-boards",
    "postgresql": "^16",
    "swagger-openapi": "api-docs",
    "linux-ubuntu": "daily-driver",
    "power-bi": "pl-300"
  },
  "scripts": {
    "design": "SDLC + Agile + POPIA-aware architecture",
    "secure": "Entra ID + SC-200 SecOps + ISO 27001 principles",
    "teach":  "turn juniors into engineers 🎓"
  }
}
```

<div align="center">

![C#](https://img.shields.io/badge/C%23-512BD4?style=for-the-badge&logo=dotnet&logoColor=white)
![Java](https://img.shields.io/badge/Java-ED8B00?style=for-the-badge&logo=openjdk&logoColor=white)
![Python](https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white)
![Flutter](https://img.shields.io/badge/Flutter-02569B?style=for-the-badge&logo=flutter&logoColor=white)
![ASP.NET Core](https://img.shields.io/badge/ASP.NET_Core-512BD4?style=for-the-badge&logo=dotnet&logoColor=white)
![Azure](https://img.shields.io/badge/Azure-0078D4?style=for-the-badge&logoColor=white)
![AWS](https://img.shields.io/badge/AWS-232F3E?style=for-the-badge&logo=amazonwebservices&logoColor=white)
![Firebase](https://img.shields.io/badge/Firebase-FFCA28?style=for-the-badge&logo=firebase&logoColor=black)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-4169E1?style=for-the-badge&logo=postgresql&logoColor=white)
![GitHub Actions](https://img.shields.io/badge/GitHub_Actions-2088FF?style=for-the-badge&logo=githubactions&logoColor=white)
![Linux](https://img.shields.io/badge/Linux-E95420?style=for-the-badge&logo=ubuntu&logoColor=white)
![Git](https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white)

</div>

<br/>

## 🌱 `// TODO: currently levelling up`

```dart
final roadmap = Roadmap(
  inProgress: [
    'CI/CD pipelines — GitHub Actions & Azure DevOps',
    'Advanced Flutter — state management & clean architecture',
    'Azure App Services & scalable cloud-first backends',
    'Cloud security best practices',
  ],
  openToCollaborateOn: [
    'Cloud-native applications',
    'Mobile/web platforms with social impact 🌍',
    'Azure, Firebase & security-focused projects',
  ],
);
```

<br/>

<div align="center">

## 📊 `git stats --live`

<img src="https://github-readme-stats.vercel.app/api?username=jabulile1704&show_icons=true&theme=tokyonight&hide_border=true&bg_color=00000000" alt="GitHub stats" height="165"/>
<img src="https://github-readme-stats.vercel.app/api/top-langs?username=jabulile1704&layout=compact&theme=tokyonight&hide_border=true&bg_color=00000000" alt="Top languages" height="165"/>

<img src="https://streak-stats.demolab.com/?user=jabulile1704&theme=tokyonight&hide_border=true&background=00000000" alt="GitHub streak"/>

<br/><br/>

```csharp
Console.WriteLine("Let's build something impactful together 🚀");
// → jabu.mashibs@gmail.com
```

[![LinkedIn](https://img.shields.io/badge/LinkedIn-jabulile--mashibini-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/jabulile-mashibini)
[![Email](https://img.shields.io/badge/jabu.mashibs@gmail.com-EA4335?style=for-the-badge&logo=gmail&logoColor=white)](mailto:jabu.mashibs@gmail.com)
[![Portfolio](https://img.shields.io/badge/🌐_jabulile1704.github.io-Live_Portfolio-2ea44f?style=for-the-badge&logo=githubpages&logoColor=white)](https://jabulile1704.github.io/JM-Mashibini-Website-Portfolio-/)

<img src="https://capsule-render.vercel.app/api?type=waving&color=0:02569B,50:512BD4,100:0078D4&height=120&section=footer" width="100%"/>

</div>
