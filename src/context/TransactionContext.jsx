import React, {useEffect, useState} from 'react';
import {ethers} from 'ethers';
import { contractABI, contractAddress } from '../utils/constants';



export const TransactionContext = React.createContext();

const { ethereum } = window;


const getEthereumContract = () => {
    const provider = new ethers.providers.Web3Provider(ethereum);
    const signer = provider.getSigner();
    const transactionContract = new ethers.Contract(contractAddress, contractABI, signer);

    console.log({
        provider,
        signer,
        transactionContract
    })
}

export const TransactionProvider = ({ children }) => {
    const [currentAccount, setCurrentAccount] = useState("");
    const [formData, setFormData] = useState({ addressTo: '', ammount:'', message:'' })

    const handleChange = (e, name) => {
        setFormData((prevState) => ({...prevState, [name]: e.target.value }));
    }

    const checkIfWalletIsConnect = async () => {
        try{
            if (!ethereum) return alert("Please install MetaMask.");

            const accounts = await ethereum.request({ method: "eth_accounts" });

            if(accounts.length){
                setCurrentAccount(accounts[0])
            }else{
                console.log("No accounts found");
            }
        }catch(error){
            console.log(error);
    
            throw new Error("No ethereum object");
        }
        
    };

    const connectWallet = async () => {
        try {
            if (!ethereum) return alert("Please install MetaMask.");
    
            const accounts = await ethereum.request({ method: "eth_requestAccounts", });
    
            setCurrentAccount(accounts[0]);
        } catch (error) {
            console.log(error);
    
            throw new Error("No ethereum object");
        }
    };

    const sendTransaction = async() => {
        try{
            if (!ethereum) return alert("Please install MetaMask.");


        }catch(error){
            console.log(error);
        }
    }

    useEffect(() => {
        checkIfWalletIsConnect();
    }, []);

    return(
        <TransactionContext.Provider 
            value={{ connectWallet, 
                currentAccount, 
                formData, 
                handleChange, 
                setFormData }} 
        >
            {children}
        </TransactionContext.Provider>

    );
}