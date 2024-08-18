'use client'
import { useContext, useState } from "react";
import Navbar from "../components/navbar";
import { Title, ReasonTitle, Submit } from "../components/title";
import styles from "./page.module.css";
import { NominationContext } from '../nominationContext.js';

interface NominationFormProps {
  // Add props type annotations if needed
}

interface FormData {
  name: string;
  email: string;
  reason: string;
  nominatorName: string;
  nominatorEmail: string;
}

const NominationForm: React.FC<NominationFormProps> = () => {
  const { nominees, setNominees } = useContext(NominationContext);

  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    reason: '',
    nominatorName: '',
    nominatorEmail: '',
  });

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const newNominee = { ...formData };
    setNominees([...nominees, newNominee]);
    setFormData({
      name: '',
      email: '',
      reason: '',
      nominatorName: '',
      nominatorEmail: '',
    });
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <>
      <Navbar />
      <div className={styles.container}>
        <h1 className={styles.h1}>Nominate a Colleague</h1>
        <form onSubmit={handleSubmit}>
          <Title label="Nominee's Name" placeholder="Enter First and Last Name" name="name" value={formData.name} onChange={handleChange} />
          <Title label="Nominee's Email" placeholder="Email Address" name="email" value={formData.email} onChange={handleChange} />
          <ReasonTitle label="Reason for Nomination " name="reason" value={formData.reason} onChange={handleChange} />
          <Title label="Your Name" placeholder="First and Last Name" name="nominatorName" value={formData.nominatorName} onChange={handleChange} />
          <Title label="Your Email" placeholder="Email Address" name="nominatorEmail" value={formData.nominatorEmail} onChange={handleChange} />
          <Submit />
        </form>
      </div>
    </>
  );
};

export default NominationForm;