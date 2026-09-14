// The Weber County Hive — PAC Case Docket
// To add a new case file: copy an object below, fill in the fields,
// and save it. index.html reads this file and builds the docket
// automatically — you never need to touch that file by hand.
// IMPORTANT: the "link" value below must exactly match the real
// filename of the case-file page you upload to GitHub.
//
// status: "documented" | "pending" | "disputed"  (controls stamp color/text)
// pairWith: optional — caseNumber of another entry this one is paired with,
// shows a "Paired with..." note and a matching border color on both cards.
const CASES = [
  {
    caseNumber: "PAC-01",
    title: "Two Rosters, One Address",
    category: "Campaign Finance & Ethics",
    summary: "A leadership PAC created in 2018 has moved $1,000 checks to dozens of Utah Republicans. It's registered two different ways with two different sets of people in charge — and its own nonprofit-corp directors are among the candidates it paid.",
    officials: ["Brady Brammer", "Cory Maloy", "Mike McKell", "Bradley Daw", "Jon Hawkins"],
    status: "documented",
    updated: "Sep 12, 2026",
    link: "central-utah-gop-house-pac.html"
  },
  {
    caseNumber: "PAC-02",
    title: "Three Primary Challenges, One Cause",
    category: "Campaign Finance & Ethics",
    summary: "A citizen PAC formed to defend judicial independence funded primary challenges against two legislators behind a court-power overhaul — plus a third candidate with no clear connection to that fight at all.",
    officials: ["Brady Brammer", "Jordan Teuscher", "Alexandra Dorius", "Caroline Morris"],
    status: "documented",
    updated: "Sep 12, 2026",
    link: "checks-and-balances-pac.html"
  },
  {
    caseNumber: "PAC-03",
    title: "Count My Vote's Signature-Gathering Machine",
    category: "Campaign Finance & Ethics",
    summary: "The organization behind Utah's 2014 primary-ballot reform has quietly become one of the largest political funders in the state — with mega-donors including Gail Miller, the Leavitt family, and Zions Bank's former CEO.",
    officials: ["Rich McKeown", "Val Oveson", "Michael O. Leavitt", "Gail Miller"],
    status: "documented",
    updated: "Sep 12, 2026",
    link: "cmv-pac.html",
    pairWith: "PAC-13"
  },
  {
    caseNumber: "PAC-04",
    title: "The Democratic-Aligned Counterpart",
    category: "Campaign Finance & Ethics",
    summary: "A money-moving PAC sharing an office and a payment processor with the political consulting firm that appears to run it — and the entity that resolves a $5,500 typo already flagged in a separate PAC's own records.",
    officials: ["Katie Wright", "Kayti Sullivan", "Matt Lyon"],
    status: "documented",
    updated: "Sep 12, 2026",
    link: "uinpac.html"
  },
  {
    caseNumber: "PAC-05",
    title: "Swept In By Accident, Funded By Design",
    category: "Campaign Finance & Ethics",
    summary: "A House candidate who lost his own convention by 42 points shows up in another PAC's file purely by coincidence — his real funding story is a signature-gathering machine and a repeat cast of statewide donors.",
    officials: ["Chris McConnehey", "Stuart Adams", "Scott Anderson", "Dan Hemmert"],
    status: "documented",
    updated: "Sep 12, 2026",
    link: "chris-mcconnehey-hd38.html"
  },
  {
    caseNumber: "PAC-06",
    title: "One Man's Signature, Six-Figure Extraction",
    category: "Campaign Finance & Ethics",
    summary: "Speaker Mike Schultz's own leadership PAC has moved over $400,000 to candidates and party committees since 2023 — while its CFO, who holds the identical role on three other PACs, has personally taken over $175,000 out of this one alone.",
    officials: ["Mike Schultz", "Kyle Palmer", "Abby Osborne", "Jared Meyer"],
    status: "documented",
    updated: "Sep 12, 2026",
    link: "house-speaker-leadership-pac.html"
  },
  {
    caseNumber: "PAC-07",
    title: "$4.29 Million, One Signature Authority",
    category: "Campaign Finance & Ethics",
    summary: "The Utah House Republican Election Committee has moved over $4.29 million combined since 2018 — nearly double what an earlier partial pull found. Three candidates on this project's own pages received confirmed five-figure totals.",
    officials: ["Mike Schultz", "Casey Snider", "Candice Pierucci", "Kyle Palmer"],
    status: "documented",
    updated: "Sep 12, 2026",
    link: "uhrec-pac.html"
  },
  {
    caseNumber: "PAC-08",
    title: "Dissolved, But Not Before Funding the Attack Ads",
    category: "Campaign Finance & Ethics",
    summary: "Two brothers' lobbying firm fed $134,400 into a PAC that funded 56+ Republican candidates statewide — then a related, nearly-identically-named entity ran attack ads against three Democratic candidates while reporting zero dollars raised or spent.",
    officials: ["Greg Hartley", "Jeff Hartley", "Mike Schultz"],
    status: "documented",
    updated: "Sep 12, 2026",
    link: "h3-pac.html"
  },
  {
    caseNumber: "PAC-09",
    title: "The Fourth PAC, the Same Treasurer",
    category: "Campaign Finance & Ethics",
    summary: "A Senate-and-House leadership PAC that raised over $910,000 since 2018 — while its treasurer's own consulting company has taken more than $108,000 out of it, on top of the identical arrangement he already runs at three other Utah PACs.",
    officials: ["Ann Millner", "Casey Snider", "Kyle Palmer", "Jill Koford"],
    status: "documented",
    updated: "Sep 13, 2026",
    link: "nupac.html"
  },
  {
    caseNumber: "PAC-10",
    title: "Dissolved on Paper, Active in Practice",
    category: "Campaign Finance & Ethics",
    summary: "A nonprofit corporation that named a sitting Attorney General as one of three Directors was administratively dissolved in July 2023 — and has raised and spent $627,000 in the years since, without ever re-registering.",
    officials: ["Casey Hill", "Lincoln Shurtz", "Derek Brown", "Mike McCauley"],
    status: "documented",
    updated: "Sep 14, 2026",
    link: "lincoln-hill-pac-case.html",
    pairWith: "PAC-12"
  },
  {
    caseNumber: "PAC-11",
    title: "+496% the Year It Dissolved",
    category: "Campaign Finance & Ethics",
    summary: "A PAC that legally traces back to one man's own consulting entity, dissolved as a corporation in mid-2023 — the same year its spending grew nearly fivefold. The name itself was filed nine months before its public 'merger' story was ever announced.",
    officials: ["Lincoln Shurtz", "Casey Hill", "Derek Brown", "Lincoln Fillmore"],
    status: "documented",
    updated: "Sep 14, 2026",
    link: "lincoln-hill-partners-pac-case.html"
  },
  {
    caseNumber: "PAC-12",
    title: "The Men Behind Lincoln Hill",
    category: "Campaign Finance & Ethics",
    summary: "Network profile: the four principals behind Lincoln Hill Partners and its two PACs — a merger story that traces back to one man's own entity, a Red Hill naming maze spanning four unrelated companies, and the MIDA appointment of a man who lobbied it until two days before running it.",
    officials: ["Lincoln Shurtz", "Casey Hill", "Derek Brown", "Chase Everton", "Dan Hemmert"],
    status: "documented",
    updated: "Sep 14, 2026",
    link: "lincoln-hill-men-behind.html",
    pairWith: "PAC-10"
  },
  {
    caseNumber: "PAC-13",
    title: "Same Filer, Three Executives, One Company",
    category: "Campaign Finance & Ethics",
    summary: "An \"education advocacy\" PAC's own founding paperwork was filed by a private prison company's general counsel, using its treasury director as registered agent and its president as Executive Committee chair — while a separate autism-therapy company's giving arm sent an identical check to the same sitting MIDA Vice Chair one week later.",
    officials: ["Bob Marquardt", "Ammaron Wolfgramm", "Jerry Stevenson", "Mike Schultz", "Gail Miller"],
    status: "documented",
    updated: "Sep 14, 2026",
    link: "education-first-utah.html",
    pairWith: "PAC-03"
  }
];
