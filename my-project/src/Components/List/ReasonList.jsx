import { MessageOutlined, SecurityScanOutlined, FormOutlined, ForkOutlined } from "@ant-design/icons";
export const ReasonList = [
    {
        Phase: "The Scouting/Application Phase",
        Criteria: "Previous works",
        Evaluation: "Pictures and reviews",
        Exemption: "Patner Subsidiary",
        Period: "3 Days",
        icon: <SecurityScanOutlined/>
    },
    {
        Phase: "The Invitation",
        Criteria: "Passed Application Phase ",
        Evaluation: "One on One Interview",
        Exemption: "None",
        Period: "2 Days",
        icon: <ForkOutlined/>
    },
    {
        Phase: "Deliberation and Offer",
        Criteria: "Passed The Invitation Stage",
        Evaluation: "Flexible platforms preferrably Mail.",
        Exemption: "None",
        Period: "1-2 Weeks",
        icon: <MessageOutlined/>
    },
    {
        Phase: "Contract Signing",
        Criteria: "Validating Product Availability",
        Evaluation: "On-site Agent Verification",
        Exemption: "None",
        Period: "3 days",
        icon: <FormOutlined/>
    },
]