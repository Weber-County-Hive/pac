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
    link: "cmv-pac.html"
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
  }
];
