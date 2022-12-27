import React from "react";

const Example = () => {
  return (
    <>
      <h1 data-tour="heading123" className="test12 test123" style={{color:"red"}}>
        Key Features
      </h1>
      <p>
      <strong>High availability:</strong> Cloud resources are available at all times and have no single point of failure.
      <br/>
      <strong>Disaster Recovery:</strong> Allow for a speedy recovery or service continuance in any type of outage.
      <br/>
      <strong>Fault Tolerance: </strong> Keep downtime to a minimum.
      <br/>
      <strong>Scalability: </strong> Allow resources to be scaled up or down (vertical scaling), in and out (horizontal scaling).
      <br/>
      <strong> Elasticity: </strong> The ability to rapidly scale resources such as virtual machines and storage.
      </p>
      <br></br>
      <h3 data-tour="sub-heading" className="testR tests" style={{color:"red"}}>
        Benifits
      </h3>
      <p>
      Oracle Cloud Infrastructure is built for persistent high-performance applications, such as stateful database connections, raw processing via CPUs or GPUs, millions of storage IOPS, and GB/s throughput.
      Non-blocking networks ensure that all resources receive consistent high performance and low latency. Oracle Cloud Infrastructure uses the most up-to-date CPUs, GPUs, networking, and storage technologies, such as NVMe SSD drives. OCI, for example, provides bare-metal instances with 51.2 TB of NVMe solid-state storage that can handle millions of reading and write transactions per second. According to third-party testing, Oracle's computing and storage deliver 2-5 times the I/O performance of equivalent on-premises or AWS offerings, with more consistent low latency. Faster outcomes for end customers and more productivity benefit from excellent performance. For marketing agency Maritz, for example, financial operations that used to take two hours now take ten minutes.
      </p>
    </>
  );
};

export default Example;
