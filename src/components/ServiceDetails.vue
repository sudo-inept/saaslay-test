<template>
  <div v-for="service in serviceList" :key="service.title" v-show="service.title === activeService.title">
    <div class="rn-page-title-area pt--120 pb--190 pt_md--100 pb_md--100 pt_sm--100 pb_sm--100 bg_image bg_image--4" data-black-overlay="5">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="rn-page-title text-center pt--100 pt_md--50 pt_sm--100">
              <h2 class="title theme-gradient">{{ activeService.title }}</h2>
              <p>Fresh From The Press Discription</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="rn-service-details ptb--120 bg_color--1">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="service-details-inner">
              <div class="inner">
                <div
                  class="row row--35 sercice-details-content align-items-center"
                >
                  <div class="col-lg-6 col-12">
                    <div class="thumb position-relative">
                      <img
                        class="w-100"
                        src="/assets/images/service/service-01.png"
                        alt="Service Images"
                      />
                    </div>
                  </div>
                  <div class="col-lg-6 col-12">
                    <div class="details mt_md--30 mt_sm--30">
                      <div class="section-title">
                        <span class="subtitle">Our approach</span>
                        <h2 class="title">{{ activeService.title }}</h2>
                        <p class="description">
                          {{ activeService.description }}
                        </p>
                        <!-- <p class="description">
                          Ready to take your business to the next level? Contact
                          us today to learn how SaasLay can help you achieve
                          your business goals.
                        </p> -->
                      </div>
                      <ul class="service-details-list">
                        <li >
                          <span>{{ service.approach }}</span>
                        </li>
                        <li>
                          <span>{{ service.approach2 }}</span
                          >
                        </li>
                        <li>
                          <span
                            >{{ service.approach3 }}</span
                          >
                        </li>
                        <li>
                          <span
                            >{{ service.approach4 }}</span
                          >
                        </li>
                        <li v-show="service.approach5 !=''">
                          <span
                            >{{ service.approach5 }}</span
                          >
                        </li>
                        <li v-show="service.approach6 !=''">
                          <span
                            >{{ service.approach6 }}</span
                          >
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="rn-service-details ptb--120 bg_color--5">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="service-details-inner">
              <div class="inner">
                <div
                  class="row row--35 sercice-details-content align-items-center"
                >
                  <div class="col-lg-6 col-12">
                    <div class="details">
                      <div class="section-title">
                        <span class="subtitle">Our benefits</span>
                        <h2 class="title">{{ activeService.title }}</h2>
                        <p class="description">
                          {{ service.description }}
                        </p>
                        <p class="description">
                          If you are looking for a partner to help you build robust, scalable, and efficient software solutions, SaasLay is the perfect choice. We have the expertise, experience, and passion to help you succeed. 
                        </p>
                      </div>
                      <ul class="service-details-list mt--30">
                        <li>{{ service.benefit }}</li>
                        <li>{{ service.benefit2 }}</li>
                        <li>{{ service.benefit3 }}</li>
                        <li>{{ service.benefit4 }}</li>
                        <li v-show="service.benefit5 !=''">{{ service.benefit5 }}</li>
                        <li v-show="service.benefit6 !=''">{{ service.benefit6 }}</li>
                      </ul>
                    </div>
                  </div>
                  <div class="col-lg-6 col-12 mt_md--30 mt_sm--30">
                    <div class="thumb position-relative">
                      <img
                        class="w-100"
                        src="/assets/images/service/service-02.png"
                        alt="Service Images"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>


<script>
import Footer from "../components/Footer.vue";

export default {
  name: "ServiceDetails",
  components: {
    Footer,
  },
  data() {
    return {
      isOpen: false,
      serviceList: [
        {
          title: "Software development consulting",
          description:
            "We assess needs, design custom strategies, assist implementation, and provide ongoing support for your business success.",
          approach: "Needs assessment: We conduct a comprehensive analysis of your existing technology infrastructure, business processes, and goals to identify areas for improvement.",
          approach2: "Solution design: Based on the assessment, we develop customized strategies and solutions that align with your business objectives, leveraging emerging technologies and industry best practices.",
          approach3: "Implementation and integration: Our team assists with the implementation and integration of the recommended solutions, ensuring a seamless transition and minimal disruption to your operations.",
          approach4: "Monitoring and support: We provide ongoing monitoring, maintenance, and support to ensure the continued success of the implemented solutions, as well as the flexibility to adapt to evolving business needs.",
          approach5: "",
          approach6: "",
          benefit: "We are a trusted partner with a proven track record of success.",
          benefit2: "We have a deep understanding of the latest technologies and trends.",
          benefit3: "We are committed to providing our clients with the highest quality services and solutions.",
          benefit4: "We are flexible and adaptable to meet the changing needs of our clients.",
          benefit5: "If you would like to learn more about our technology consulting services, please contact us today. We would be happy to discuss your specific needs and how we can help you achieve your goals.",
          benefit6: "",
          benefit7: "",
        },
        {
          title: "Digital transformation consulting",
          description:
            "Tailored digital strategy, technology planning, process automation, cultural transformation, data insights, and customer experience enhancement",
            approach: "Assessment and Strategy Development: We conduct a thorough assessment of your organization's current digital landscape, processes, and goals. Based on this analysis, we develop a tailored digital transformation strategy that aligns with your unique business needs.",
          approach2: "Technology Roadmap and Planning: We work closely with your team to define a technology roadmap that outlines the steps and milestones required for successful digital transformation. Our consultants help you prioritize initiatives, choose the right technologies, and plan for implementation and integration.",
          approach3: "Process Optimization and Automation: We identify opportunities for process optimization and automation to streamline your operations, reduce manual effort, and enhance efficiency. Our consultants leverage industry best practices and cutting-edge tools to drive operational excellence throughout your organization.",
          approach4: "Change Management and Cultural Transformation: Digital transformation is not just about technology; it requires a cultural shift within your organization. We assist you in managing change, fostering a digital mindset, and empowering your teams to embrace new ways of working.",
          approach5: "Data-driven Insights and Analytics: We help you harness the power of data by implementing robust analytics solutions. Our consultants enable you to derive valuable insights from your data, make data-driven decisions, and uncover new opportunities for innovation and growth.",
          approach6: "Customer Experience Enhancement: In the digital age, delivering exceptional customer experiences is vital. We guide you in adopting customer-centric strategies, leveraging technologies such as CRM systems and personalization tools to enhance customer engagement and loyalty.",
          benefit: "Strategic Guidance: Leverage our expertise to develop a comprehensive digital transformation strategy that aligns with your business goals and drives tangible results.",
          benefit2: "Technology Expertise: Gain access to our deep knowledge of emerging technologies and best practices, ensuring you make informed technology investments.",
          benefit3: "Operational Efficiency: Optimize your processes and automate manual tasks to drive efficiency, reduce costs, and improve overall productivity.",
          benefit4: "Agility and Adaptability: Build an agile organization that can quickly adapt to market changes, embrace innovation, and seize new opportunities.",
          benefit5: "Improved Customer Engagement: Enhance customer experiences by leveraging digital technologies, leading to increased customer satisfaction and loyalty.",
          benefit6: "Data-driven Decision Making: Utilize data analytics and insights to make informed business decisions and drive strategic initiatives.",
          benefit7: "",
        },
        {
          title: "Cloud and Infrastructure Optimization",
          description:
            "Comprehensive infrastructure analysis, tailored cloud strategy, seamless migration/deployment, and optimization for performance and cost",
            approach: "Infrastructure Assessment and Analysis: We begin with a comprehensive assessment of your existing infrastructure, including hardware, network, and software systems. Our consultants analyze performance bottlenecks, identify areas of improvement, and evaluate the suitability of cloud adoption.",
          approach2: "Cloud Strategy and Planning: Based on your unique requirements and goals, our consultants develop a tailored cloud strategy that outlines the most suitable cloud platforms, migration plans, and deployment models. We consider factors such as scalability, security, cost optimization, and integration with existing systems.",
          approach3: "Cloud Migration and Deployment: Our consultants assist you in the seamless migration of your applications, data, and workloads to the cloud. We follow proven methodologies and best practices to minimize downtime, ensure data integrity, and optimize resource allocation for enhanced performance.",
          approach4: "Infrastructure Optimization: We analyze your cloud infrastructure and optimize its configuration for improved performance, cost-effectiveness, and scalability. Our consultants leverage automation, load balancing, and resource management techniques to optimize resource utilization and minimize wastage.",
          approach5: "",
          approach6: "",
          benefit: "Scalability and Flexibility: Leverage the scalability and flexibility of the cloud to seamlessly handle changing business needs and fluctuations in demand.",
          benefit2: "Cost Optimization: Optimize your infrastructure costs by leveraging cloud services and resource optimization techniques, paying only for what you use.",
          benefit3: "Enhanced Performance: Achieve improved application performance and availability through optimized cloud infrastructure configurations and resource allocation.",
          benefit4: "Increased Security: Implement robust security measures to protect your data and infrastructure from evolving threats, ensuring compliance with industry regulations.",
          benefit5: "Streamlined Operations: Simplify infrastructure management and reduce administrative overheads through automation, centralization, and cloud-native tools.",
          benefit6: "Future-Proof Infrastructure: Leverage cloud technologies to future-proof your infrastructure, enabling rapid innovation and easy scalability as your business grows.",
          benefit7: "",
        },
        {
          title: "Cybersecurity and Data Privacy",
          description:
            "We assess threats, develop tailored security strategies, implement robust architectures, manage incidents, and train for cyber awareness.",
            approach: "Threat Assessment and Risk Analysis: Our consultants conduct a thorough assessment of your existing IT infrastructure, systems, and data to identify vulnerabilities and assess potential risks. We evaluate internal and external threats, analyze security gaps, and develop a comprehensive understanding of your unique cybersecurity needs.",
          approach2: "Security Strategy and Planning: Based on the assessment, we develop a tailored security strategy that aligns with your business objectives, compliance requirements, and industry best practices. Our consultants work closely with your team to prioritize security initiatives and define a roadmap for implementation.",
          approach3: "Security Architecture and Implementation: We design and implement robust security architectures tailored to your organization's needs. Our consultants deploy advanced security technologies, such as firewalls, intrusion detection systems, encryption, and multi-factor authentication, to protect your systems and data from unauthorized access.",
          approach4: "Incident Response and Management: In the event of a security incident, our consultants are prepared to respond swiftly and effectively. We develop incident response plans, conduct security drills, and provide guidance on containment, eradication, and recovery to minimize the impact of security breaches.",
          approach5: "Security Awareness and Training: We believe that cybersecurity is a collective responsibility. Our consultants provide cybersecurity awareness training to your employees, empowering them to recognize and mitigate common security risks, such as phishing attacks or social engineering attempts.",
          approach6: "",
          benefit: "Comprehensive Protection: Safeguard your systems, networks, and data from evolving cyber threats through a multi-layered and proactive security approach.",
          benefit2: "Data Privacy Compliance: Ensure compliance with data privacy regulations, protecting the privacy rights of your customers and stakeholders.",
          benefit3: "Risk Mitigation: Minimize security risks through ongoing monitoring, threat intelligence, and timely incident response, reducing the likelihood and impact of security breaches.",
          benefit4: "Enhanced Trust and Reputation: Build trust with your customers, partners, and stakeholders by demonstrating your commitment to data privacy and security best practices.",
          benefit5: "Peace of Mind: Gain peace of mind knowing that your organization's critical assets and sensitive data are protected by industry-leading cybersecurity measures.",
          benefit6: "",
          benefit7: "",

        },
        {
          title: "IT Project Management",
          description:
            "Collaborative project definition, meticulous planning, resource & risk management, effective communication, and stringent quality assurance",
            approach: "Project Definition: We work closely with your team to define the project objectives, scope, and deliverables.",
          approach2: "Project Planning: We develop a comprehensive project plan, including timelines, resource allocation, and risk management strategies. ",
          approach3: "Resource Management: We ensure that the right resources are assigned to your project, including skilled team members and appropriate technologies. ",
          approach4: "Risk Management: We identify and assess potential risks that could impact project success. We implement effective risk mitigation strategies to minimize their impact on project timelines and outcomes.",
          approach5: "Communication and Stakeholder Management: Clear and effective communication is crucial for project success. We facilitate communication among team members, stakeholders, and senior management, ensuring alignment and timely decision-making throughout the project.",
          approach6: "Quality Assurance and Control: We implement rigorous quality assurance processes to ensure that project deliverables meet the highest standards. We conduct regular quality control checks, testing, and verification to ensure that project outputs are error-free and meet customer requirements.",
          benefit: "Streamlined Project Execution: We ensure that projects are executed efficiently, with clearly defined processes and effective coordination among team members.",
          benefit2: "Timely Delivery: We leverage project management methodologies and best practices to ensure projects are delivered on schedule, meeting deadlines and client expectations.",
          benefit3: "Cost Control: We employ effective cost control measures, optimizing resource utilization and minimizing project costs.",
          benefit4: "Risk Mitigation: We identify and mitigate project risks, ensuring that potential issues are addressed proactively, minimizing their impact on project outcomes.",
          benefit5: "Effective Communication: We foster transparent and open communication among project stakeholders, enabling effective collaboration and alignment throughout the project lifecycle.",
          benefit6: "Quality Assurance: We enforce strict quality control measures to ensure that project deliverables meet the highest quality standards.",
          benefit7: "",

        },
        {
          title: "Product Development",
          description:
            "Our process is holistic and covers the entire product development lifecycle, from ideation to deployment and support. We work closely with our clients to understand their needs and goals, and we use our expertise and experience to create products that are both innovative and user-friendly.",
            approach: "Discovery and Planning: We collaborate with you to understand your vision, goals, and target market. We conduct market research and create a comprehensive project plan to ensure alignment and success.",
          approach2: "Design and Prototyping: Our talented design team translates your ideas into visually appealing and user-friendly interfaces. We create interactive prototypes to gather feedback and iterate on the design.",
          approach3: "Development and Testing: Our experienced developers bring the design to life, using the latest technologies and best practices. We follow rigorous testing procedures to ensure quality, performance, and security.",
          approach4: "Deployment and Support: We assist with the deployment of the product, whether it's on-premises or in the cloud. We also provide ongoing support and maintenance to ensure your product's long-term success.",
          approach5: "If you're looking for a partner to help you bring your product to market, SaasLay is the perfect choice. We have the expertise, experience, and passion to help you succeed.",
          approach6: "",
          benefit: "If you're looking for a partner to help you bring your product to market, SaasLay is the perfect choice. We have the expertise, experience, and passion to help you succeed.",
          benefit2: "If you're looking for a partner to help you bring your product to market, SaasLay is the perfect choice. We have the expertise, experience, and passion to help you succeed.",
          benefit3: "Latest Technologies: Utilization of the most recent tech and industry best practices during development ensures high-performing and secure products.",
          benefit4: "Rigorous Testing: Thorough testing procedures ensure the quality, performance, and security of the product.",
          benefit5: "Deployment Support: Assistance in deploying the product, either on-premises or in the cloud.",
          benefit6: "Expertise & Passion: SaasLay's extensive experience and passionate team guarantee the success of your product development project.",
          benefit7: "",

        }
      ],
      activeService: { title: "", description: "" },
    };
  },
  methods: {
    openModal() {
      this.isOpen = true;
    },
    closeModal() {
      this.isOpen = false;
    },
  },
  watch: {
    "$route.query.title": {
      handler(newVal, oldVal) {
        this.activeService = this.serviceList.filter((service) => service.title === newVal)[0];
      },
      immediate: true,
    },
  },
};
</script>

