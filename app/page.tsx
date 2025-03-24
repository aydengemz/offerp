"use client";

import { useEffect } from "react";
import Head from "next/head";

export default function Home() {
  useEffect(() => {
    // 1) Particles.js initialization
    if (typeof window !== "undefined" && "particlesJS" in window) {
      (window as any).particlesJS("particles-js", {
        particles: {
          number: { value: 80, density: { enable: true, value_area: 800 } },
          color: { value: "#00D630" },
          shape: { type: "circle" },
          opacity: {
            value: 0.5,
            random: true,
            anim: { enable: true, speed: 1, opacity_min: 0.1, sync: false },
          },
          size: {
            value: 3,
            random: true,
            anim: { enable: true, speed: 2, size_min: 0.1, sync: false },
          },
          line_linked: {
            enable: true,
            distance: 150,
            color: "#00D630",
            opacity: 0.2,
            width: 1,
          },
          move: {
            enable: true,
            speed: 1,
            direction: "none",
            random: true,
            straight: false,
            out_mode: "out",
            bounce: false,
          },
        },
        interactivity: {
          detect_on: "canvas",
          events: {
            onhover: { enable: true, mode: "repulse" },
            onclick: { enable: true, mode: "push" },
            resize: true,
          },
          modes: {
            repulse: { distance: 100, duration: 0.4 },
            push: { particles_nb: 4 },
          },
        },
        retina_detect: true,
      });
    }

    // 2) Animate the "$750" amount
    function animateAmount() {
      const amountElement = document.getElementById("amount");
      if (!amountElement) return;

      const finalAmount = 750;
      const duration = 2000;
      const steps = 60;
      const increment = finalAmount / steps;
      let currentAmount = 0;
      let currentStep = 0;

      const interval = setInterval(() => {
        currentStep++;
        currentAmount = Math.min(finalAmount, currentStep * increment);
        amountElement.textContent = "$" + currentAmount.toFixed(2);

        if (currentAmount >= finalAmount) {
          clearInterval(interval);
        }
      }, duration / steps);
    }

    // 3) Countdown timer (if needed in future)
    function updateTimer() {
      const minutesEl = document.getElementById("minutes");
      const secondsEl = document.getElementById("seconds");
      if (!minutesEl || !secondsEl) return;

      let minutes = parseInt(minutesEl.textContent || "0", 10);
      let seconds = parseInt(secondsEl.textContent || "0", 10);

      if (seconds > 0) {
        seconds--;
      } else if (minutes > 0) {
        minutes--;
        seconds = 59;
      }

      minutesEl.textContent = minutes.toString().padStart(2, "0");
      secondsEl.textContent = seconds.toString().padStart(2, "0");

      if (!(minutes === 0 && seconds === 0)) {
        setTimeout(updateTimer, 1000);
      }
    }

    // 4) Update the "users online" count
    function updateOnlineUsers() {
      const onlineEl = document.getElementById("onlineUsers");
      if (!onlineEl) return;
      const baseUsers = 123;
      const randomVariation = Math.floor(Math.random() * 20) - 10;
      onlineEl.textContent = (baseUsers + randomVariation).toString();
      setTimeout(updateOnlineUsers, 2000);
    }

    // Add back notification system
    const NAMES = [
      "James R.",
      "Emma S.",
      "Liam K.",
      "Olivia M.",
      "Noah P.",
      "Ava W.",
      "Ethan B.",
      "Sophia L.",
      "Mason T.",
      "Isabella F.",
      "William H.",
      "Mia C.",
      "Lucas N.",
      "Charlotte D.",
      "Henry G.",
      "Amelia V.",
    ];

    function showNotification(name: string) {
      const alert = document.getElementById("nameAlert");
      if (!alert) return;
      const nameSpan = alert.querySelector(".name") as HTMLElement;
      if (!nameSpan) return;

      nameSpan.textContent = name;
      alert.style.display = "flex";

      setTimeout(() => {
        alert.style.display = "none";
      }, 3000);
    }

    function queueRandomNotification() {
      const randomName = NAMES[Math.floor(Math.random() * NAMES.length)];
      showNotification(randomName);
    }

    // 5) Initialize everything
    animateAmount();
    updateTimer();
    updateOnlineUsers();
    setInterval(queueRandomNotification, 4000);

    // 6) Claim button
    const claimBtn = document.getElementById("claimButton");
    if (claimBtn) {
      claimBtn.addEventListener("click", () => {
        window.location.href =
          "https://glstrck.com/aff_c?offer_id=1084&aff_id=11848&source=newlander";
      });
    }
  }, []);

  return (
    <>
      <Head>
        <title>Venmo Rewards</title>
        <script src="https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js" />
      </Head>

      <div id="particles-js" style={{ position: "fixed", width: "100%", height: "100%", zIndex: 1 }} />

      {/* Notification Alert */}
      <div id="nameAlert" style={{ display: "none" }}>
        <img src="/cash2.png" alt="Cash" style={{ width: 35, height: "auto" }} />
        <div>
          <span className="name">Sophia L.</span> claimed $750!
        </div>
      </div>

      <div className="page-container">
        <div className="reward-card">
          <div className="venmo-logo-container">
            <img className="venmo-logo" src="/cash2.png" alt="Cash" />
            {/* <div className="cash-text">Cash Balance</div> */}
            <img className="verd-logo" src="/verd.png" alt="Verified" />
          </div>

          <div className="amount" id="amount">
            $750.00 Cash
          </div>
          <div className="amount-subtext">deposited to you</div>

          <div className="instructions-container">
            <div className="instruction-item">
              <span className="number">1</span>
              <span>Click the Button Below</span>
            </div>
            <div className="instruction-item">
              <span className="number">2</span>
              <span>Enter Your Email & Info</span>
            </div>
            <div className="instruction-item">
              <span className="number">3</span>
              <span className="underline">Complete Recommended Deals</span>
            </div>
            <div className="instruction-item">
              <span className="number">4</span>
              <span>Claim Reward & Repeat</span>
            </div>
          </div>

          <div className="button-container">
            <button id="claimButton" className="claim-button">
              Work Towards $750 →
            </button>

            <img src="/test.png" alt="Trust Badge" className="trust-badge" />
          </div>
        </div>
      </div>

      <style jsx global>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
          -webkit-tap-highlight-color: transparent;
          user-select: none;
        }
        body {
          background: linear-gradient(-45deg, #e6ffe9, #d9ffd9, #ccffcc, #bfffbf);
          background-size: 400% 400%;
          animation: gradient 15s ease infinite;
          min-height: 100vh;
          position: relative;
          overflow-x: hidden;
          color: #2f3033;
          padding-top: 20px;
        }
        @keyframes gradient {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
        .page-container {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
        }
        .reward-card {
          background: rgba(255, 255, 255, 0.95);
          border-radius: 24px;
          padding: 1rem;
          position: relative;
          z-index: 2;
          backdrop-filter: blur(10px);
          border: 1px solid rgba(0, 214, 48, 0.2);
          max-width: 450px;
          width: 100%;
          box-shadow: 0 10px 30px rgba(0, 214, 48, 0.1),
            0 1px 8px rgba(0, 214, 48, 0.2);
          animation: cardFloat 3s ease-in-out infinite;
        }
        @keyframes cardFloat {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        .venmo-logo-container {
          text-align: center;
          margin-bottom: 0.5rem;
          padding-bottom: 0.5rem;
          border-bottom: 1px solid rgba(0, 214, 48, 0.1);
          position: relative;
        }
        .venmo-logo {
          width: 100px;
          height: auto;
          filter: drop-shadow(0 4px 12px rgba(0, 214, 48, 0.3));
          animation: logoShine 3s infinite;
          display: block;
          margin: 0 auto;
        }
        @keyframes logoShine {
          0% {
            filter: drop-shadow(0 4px 12px rgba(0, 214, 48, 0.3));
          }
          50% {
            filter: drop-shadow(0 8px 20px rgba(0, 214, 48, 0.5));
          }
          100% {
            filter: drop-shadow(0 4px 12px rgba(0, 214, 48, 0.3));
          }
        }
        .cash-text {
          text-align: center;
          font-size: 1.8rem;
          font-weight: 800;
          margin-top: 0.5rem;
          color: #00D630;
          text-shadow: 0 4px 20px rgba(0, 214, 48, 0.3);
          background: linear-gradient(45deg, #00D630, #40ff70);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .amount {
          font-size: 2.2rem;
          font-weight: 700;
          text-align: center;
          color: #00D630;
          margin: 0rem 0 0rem 0;
          text-shadow: 0 4px 20px rgba(0, 214, 48, 0.3);
          background: linear-gradient(45deg, #00D630, #40ff70);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: amountPulse 2s infinite;
        }
        @keyframes amountPulse {
          0%,
          100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.05);
          }
        }
        .amount-subtext {
          text-align: center;
          font-size: 1.2rem;
          font-weight: 600;
          margin-bottom: 0.5rem;
          background: linear-gradient(45deg, #00D630, #40ff70);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          text-shadow: 0 2px 10px rgba(0, 214, 48, 0.3);
        }
        .users-online {
          background: rgba(0, 214, 48, 0.1);
          padding: 0.8rem 1.2rem;
          border-radius: 16px;
          font-size: 0.9rem;
          display: flex;
          align-items: center;
          gap: 0.8rem;
          max-width: fit-content;
          margin: 0 auto 0.5rem auto;
          color: #00D630;
          border: 1px solid rgba(0, 214, 48, 0.2);
          box-shadow: 0 4px 15px rgba(0, 214, 48, 0.1);
        }
        .pulse {
          width: 10px;
          height: 10px;
          background: #00D630;
          border-radius: 50%;
          position: relative;
        }
        .pulse::before,
        .pulse::after {
          content: "";
          position: absolute;
          width: 100%;
          height: 100%;
          background: #00D630;
          border-radius: 50%;
          animation: pulseRing 1.5s infinite;
        }
        @keyframes pulseRing {
          0% {
            transform: scale(1);
            opacity: 0.8;
          }
          100% {
            transform: scale(3);
            opacity: 0;
          }
        }
        .trust-image {
          width: 100%;
          height: auto;
          margin-top: 2rem;
          border-radius: 12px;
        }
        .activities-list {
          margin: 2rem 0;
          padding: 0 0.5rem;
        }
        .activity-item {
          padding: 1rem 1.2rem;
          background: rgba(0, 214, 48, 0.08);
          border-radius: 16px;
          margin-bottom: 0.8rem;
          border: 1px solid rgba(0, 214, 48, 0.15);
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          cursor: pointer;
        }
        .activity-text {
          font-size: 1.1rem;
          font-weight: 500;
          color: #00D630;
          background: linear-gradient(45deg, #00D630, #40ff70);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .activity-item:hover {
          background: rgba(0, 214, 48, 0.12);
          transform: translateX(5px);
          box-shadow: 0 4px 15px rgba(0, 214, 48, 0.1);
        }
        .claim-button {
          background: linear-gradient(45deg, #00D630, #40ff70);
          color: white;
          border: none;
          padding: 1rem;
          border-radius: 20px;
          font-weight: 600;
          font-size: 1.1rem;
          width: 100%;
          max-width: 400px;
          cursor: pointer;
          margin: 1rem auto;
          display: block;
          box-shadow: 0 10px 30px rgba(0, 214, 48, 0.3),
            0 5px 15px rgba(0, 214, 48, 0.2);
          transition: all 0.3s ease;
          font-weight: 800;
        }
        .claim-button:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 40px rgba(0, 214, 48, 0.4),
            0 8px 20px rgba(0, 214, 48, 0.3);
        }

        /* nameAlert styles */
        #nameAlert {
          position: fixed;
          top: 10px;
          left: 50%;
          transform: translateX(-50%) translateY(0);
          background: rgba(255, 255, 255, 0.95);
          color: #2f3033;
          padding: 12px 20px;
          border-radius: 16px;
          box-shadow: 0 8px 32px rgba(0, 214, 48, 0.2);
          align-items: center;
          justify-content: center;
          text-align: center;
          gap: 12px;
          font-size: 14px;
          font-weight: 500;
          z-index: 1000;
          width: calc(100% - 2rem);
          max-width: 320px;
          backdrop-filter: blur(10px);
          margin: 0 auto;
          border: 1px solid rgba(0, 214, 48, 0.2);
          animation: slideDown 0.3s ease-out;
        }

        @keyframes slideDown {
          from {
            transform: translateX(-50%) translateY(-100%);
            opacity: 0;
          }
          to {
            transform: translateX(-50%) translateY(0);
            opacity: 1;
          }
        }

        .instructions-container {
          margin: 1rem auto;
          padding: 1rem;
          background: rgba(0, 214, 48, 0.05);
          border-radius: 16px;
          border: 1px solid rgba(0, 214, 48, 0.1);
        }

        .instruction-item {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          padding: 8px 0;
          font-size: 0.95rem;
          color: #2f3033;
          font-weight: 600;
        }

        .number {
          background: #00D630;
          color: white;
          width: 24px;
          height: 24px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.9rem;
          font-weight: 700;
          box-shadow: 0 2px 8px rgba(0, 214, 48, 0.2);
        }

        .verd-logo {
          width: 150px;
          height: auto;
          display: block;
          margin: 0.5rem auto 0;
        }

        .instruction-item span {
          text-transform: capitalize;
        }

        .underline {
          text-decoration: underline;
          text-decoration-color: #00D630;
          text-decoration-thickness: 2px;
          text-underline-offset: 2px;
        }

        .trust-badge {
          width: 100%;
          height: auto;
          margin-top: 1.5rem;
          border-radius: 12px;
          opacity: 0.9;
          transition: opacity 0.3s ease;
        }

        .trust-badge:hover {
          opacity: 1;
        }

        .claim-button {
          margin-bottom: 0;  /* Adjust button margin to work with new image */
        }
      `}</style>
    </>
  );
}
