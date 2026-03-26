import { useState } from "react";
import { ethers } from "ethers";

export default function Home() {
  const [title, setTitle] = useState("");
  const [ipfs, setIpfs] = useState("");

  const contractAddress = "YOUR_CONTRACT_ADDRESS";
  const abi = [
    "function publishResearch(string memory _title, string memory _ipfsHash) public"
  ];

  async function publish() {
    if (!window.ethereum) return alert("Install MetaMask");

    const provider = new ethers.BrowserProvider(window.ethereum);
    const signer = await provider.getSigner();
    const contract = new ethers.Contract(contractAddress, abi, signer);

    const tx = await contract.publishResearch(title, ipfs);
    await tx.wait();

    alert("Research Published 🚀");
  }

  return (
    <div style={{ padding: 40 }}>
      <h1>Biosci 🧬</h1>

      <input
        placeholder="Research Title"
        onChange={(e) => setTitle(e.target.value)}
      />
      <br /><br />

      <input
        placeholder="IPFS Hash"
        onChange={(e) => setIpfs(e.target.value)}
      />
      <br /><br />

      <button onClick={publish}>Publish</button>
    </div>
  );
}
