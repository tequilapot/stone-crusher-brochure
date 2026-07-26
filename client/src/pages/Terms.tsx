import Footer from "@/components/Footer";
import { useEffect } from "react";
import { Link } from "wouter";

export default function Terms() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-background" style={{ fontFamily: "'Calibri', 'Arial', sans-serif" }}>
      <main className="flex-grow bg-[#F8F9FA]">
        {/* Header Section */}
        <section className="bg-[#0A1628] pt-32 pb-24 relative overflow-hidden">
          {/* Subtle background element */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#F5C518]/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3" />
          
          <div className="relative z-10 max-w-[1280px] mx-auto px-8 lg:px-16">
            <div className="w-16 h-[3px] bg-[#F5C518] mb-8" />
            <h1 className="text-[clamp(2.2rem,5vw,4.5rem)] font-display font-extrabold text-white leading-[1.05] tracking-tight mb-6" style={{ fontFamily: "'Montserrat', sans-serif" }}>
              TERMS &<br />CONDITIONS
            </h1>
            <div className="flex items-center gap-3 text-white/50 text-[11px] tracking-[0.2em] uppercase font-bold" style={{ fontFamily: "'Montserrat', sans-serif" }}>
              <Link href="/" className="hover:text-[#F5C518] transition-colors">Home</Link>
              <span className="text-white/30">/</span>
              <span className="text-white">Terms</span>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="pb-24">
          <div className="max-w-[900px] mx-auto px-8 lg:px-16 bg-white p-10 lg:p-16 rounded-xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] border border-gray-100 -mt-12 relative z-20">
            <div className="max-w-none text-gray-600" style={{ fontFamily: "'Calibri', 'Arial', sans-serif" }}>
              <p className="text-[11px] text-gray-400 uppercase tracking-[0.15em] mb-12 font-bold border-b border-gray-100 pb-4" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                Last updated: May 13, 2025
              </p>
              
              <div className="space-y-12">
                <section>
                  <h3 className="text-2xl font-bold text-[#0A1628] mb-4" style={{ fontFamily: "'Montserrat', sans-serif" }}>1. Agreement to Terms</h3>
                  <p className="mb-4 text-[15px] leading-relaxed">These Terms and Conditions constitute a legally binding agreement made between you, whether personally or on behalf of an entity ("you") and SREW Projects ("we," "us" or "our"), concerning your access to and use of the www.srenggworks.com website as well as any other media form, media channel, mobile website or mobile application related, linked, or otherwise connected thereto (collectively, the "Site").</p>
                  <p className="text-[15px] leading-relaxed">You agree that by accessing the Site, you have read, understood, and agree to be bound by all of these Terms and Conditions. If you do not agree with all of these Terms and Conditions, then you are expressly prohibited from using the Site and you must discontinue use immediately.</p>
                </section>

                <section>
                  <h3 className="text-2xl font-bold text-[#0A1628] mb-4" style={{ fontFamily: "'Montserrat', sans-serif" }}>2. Intellectual Property Rights</h3>
                  <p className="mb-4 text-[15px] leading-relaxed">Unless otherwise indicated, the Site is our proprietary property and all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics on the Site (collectively, the "Content") and the trademarks, service marks, and logos contained therein (the "Marks") are owned or controlled by us or licensed to us, and are protected by copyright and trademark laws and various other intellectual property rights and unfair competition laws of India, international copyright laws, and international conventions.</p>
                  <p className="text-[15px] leading-relaxed">The Content and the Marks are provided on the Site "AS IS" for your information and personal use only. Except as expressly provided in these Terms and Conditions, no part of the Site and no Content or Marks may be copied, reproduced, aggregated, republished, uploaded, posted, publicly displayed, encoded, translated, transmitted, distributed, sold, licensed, or otherwise exploited for any commercial purpose whatsoever, without our express prior written permission.</p>
                </section>

                <section>
                  <h3 className="text-2xl font-bold text-[#0A1628] mb-4" style={{ fontFamily: "'Montserrat', sans-serif" }}>3. Products and Services</h3>
                  <p className="mb-4 text-[15px] leading-relaxed">All products and services displayed on our website are subject to availability. We reserve the right to discontinue any products or services at any time. Prices for our products are subject to change without notice.</p>
                  <p className="mb-4 text-[15px] leading-relaxed">We have made every effort to display as accurately as possible the colors and images of our products that appear on the Site. We cannot guarantee that your computer monitor's display of any color will be accurate.</p>
                  <p className="text-[15px] leading-relaxed">We reserve the right to limit the quantities of any products or services that we offer. All descriptions of products or product pricing are subject to change at any time without notice, at our sole discretion.</p>
                </section>

                <section>
                  <h3 className="text-2xl font-bold text-[#0A1628] mb-4" style={{ fontFamily: "'Montserrat', sans-serif" }}>4. Accuracy of Information</h3>
                  <p className="text-[15px] leading-relaxed">We strive to provide accurate and up-to-date information on our website. However, we do not warrant that product descriptions or other content on the site is accurate, complete, reliable, current, or error-free. If a product offered by us is not as described, your sole remedy is to return it in unused condition.</p>
                </section>

                <section>
                  <h3 className="text-2xl font-bold text-[#0A1628] mb-4" style={{ fontFamily: "'Montserrat', sans-serif" }}>5. User Representations</h3>
                  <p className="text-[15px] leading-relaxed">By using the Site, you represent and warrant that: (1) you have the legal capacity to agree to these Terms and Conditions; (2) you will not use the Site for any illegal or unauthorized purpose; and (3) your use of the Site will not violate any applicable law or regulation.</p>
                </section>

                <section>
                  <h3 className="text-2xl font-bold text-[#0A1628] mb-4" style={{ fontFamily: "'Montserrat', sans-serif" }}>6. Prohibited Activities</h3>
                  <p className="text-[15px] leading-relaxed">You may not access or use the Site for any purpose other than that for which we make the Site available. The Site may not be used in connection with any commercial endeavors except those that are specifically endorsed or approved by us.</p>
                </section>

                <section>
                  <h3 className="text-2xl font-bold text-[#0A1628] mb-4" style={{ fontFamily: "'Montserrat', sans-serif" }}>7. Warranty Disclaimer</h3>
                  <p className="text-[15px] leading-relaxed uppercase tracking-wide bg-gray-50 p-4 rounded-lg border border-gray-100">THE SITE IS PROVIDED ON AN AS-IS AND AS-AVAILABLE BASIS. YOU AGREE THAT YOUR USE OF THE SITE AND OUR SERVICES WILL BE AT YOUR SOLE RISK. TO THE FULLEST EXTENT PERMITTED BY LAW, WE DISCLAIM ALL WARRANTIES, EXPRESS OR IMPLIED, IN CONNECTION WITH THE SITE AND YOUR USE THEREOF, INCLUDING, WITHOUT LIMITATION, THE IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.</p>
                </section>

                <section>
                  <h3 className="text-2xl font-bold text-[#0A1628] mb-4" style={{ fontFamily: "'Montserrat', sans-serif" }}>8. Limitation of Liability</h3>
                  <p className="text-[15px] leading-relaxed uppercase tracking-wide bg-gray-50 p-4 rounded-lg border border-gray-100">IN NO EVENT WILL WE OR OUR DIRECTORS, EMPLOYEES, OR AGENTS BE LIABLE TO YOU OR ANY THIRD PARTY FOR ANY DIRECT, INDIRECT, CONSEQUENTIAL, EXEMPLARY, INCIDENTAL, SPECIAL, OR PUNITIVE DAMAGES, INCLUDING LOST PROFIT, LOST REVENUE, LOSS OF DATA, OR OTHER DAMAGES ARISING FROM YOUR USE OF THE SITE, EVEN IF WE HAVE BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.</p>
                </section>

                <section>
                  <h3 className="text-2xl font-bold text-[#0A1628] mb-4" style={{ fontFamily: "'Montserrat', sans-serif" }}>9. Indemnification</h3>
                  <p className="text-[15px] leading-relaxed">You agree to defend, indemnify, and hold us harmless, including our subsidiaries, affiliates, and all of our respective officers, agents, partners, and employees, from and against any loss, damage, liability, claim, or demand, including reasonable attorneys' fees and expenses, made by any third party due to or arising out of: (1) your use of the Site; (2) breach of these Terms and Conditions; (3) any breach of your representations and warranties set forth in these Terms and Conditions; (4) your violation of the rights of a third party, including but not limited to intellectual property rights; or (5) any overt harmful act toward any other user of the Site with whom you connected via the Site.</p>
                </section>

                <section>
                  <h3 className="text-2xl font-bold text-[#0A1628] mb-4" style={{ fontFamily: "'Montserrat', sans-serif" }}>10. Governing Law</h3>
                  <p className="text-[15px] leading-relaxed">These Terms and Conditions and your use of the Site are governed by and construed in accordance with the laws of India applicable to agreements made and to be entirely performed within India, without regard to its conflict of law principles.</p>
                </section>

                <section>
                  <h3 className="text-2xl font-bold text-[#0A1628] mb-4" style={{ fontFamily: "'Montserrat', sans-serif" }}>11. Changes to Terms and Conditions</h3>
                  <p className="text-[15px] leading-relaxed">We reserve the right to make changes to these Terms and Conditions at any time and for any reason. We will alert you about any changes by updating the "Last updated" date of these Terms and Conditions, and you waive any right to receive specific notice of each such change.</p>
                </section>

                <section>
                  <h3 className="text-2xl font-bold text-[#0A1628] mb-4" style={{ fontFamily: "'Montserrat', sans-serif" }}>12. Contact Us</h3>
                  <p className="text-[15px] leading-relaxed mb-6">In order to resolve a complaint regarding the Site or to receive further information regarding use of the Site, please contact us at:</p>
                  
                  <div className="bg-[#0A1628] text-white p-8 rounded-xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-[#F5C518]/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2" />
                    <address className="not-italic relative z-10 text-[14px] leading-loose">
                      <strong className="text-lg text-white mb-2 block" style={{ fontFamily: "'Montserrat', sans-serif" }}>SREW Projects</strong>
                      <span className="text-white/70 block">11-125, Dulapally, Hyderabad</span>
                      <span className="text-white/70 block mb-4">Telangana, 500100, India</span>
                      
                      <div className="flex flex-col gap-2 mt-6 pt-6 border-t border-white/10">
                        <div className="flex items-center gap-3">
                          <div className="w-6 h-6 rounded-full bg-white/5 flex items-center justify-center text-[#F5C518]">✉</div>
                          <a href="mailto:srenggworks2016@gmail.com" className="text-white/90 hover:text-[#F5C518] transition-colors">srenggworks2016@gmail.com</a>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="w-6 h-6 rounded-full bg-white/5 flex items-center justify-center text-[#F5C518]">✆</div>
                          <span className="text-white/90">+91 7075061622 / +91 7997076361</span>
                        </div>
                      </div>
                    </address>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
