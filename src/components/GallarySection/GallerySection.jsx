import React from "react";
import Marquee from "react-fast-marquee";
import './GallerySection.css'

const GallerySection = () => {
  return (
    <div>
      <div className="fs-2 text-center py-3">Graduate Glory</div>
      <Marquee>
        <div>
          <img className="round" speed={100}
            src="https://media.istockphoto.com/id/1349302576/photo/happy-graduate-student-holding-his-diploma-on-graduation-day.jpg?s=612x612&w=0&k=20&c=5tC0cWX5hv77DixVGIZkyf-1sh5GU7fDphhcXcRUD8g="
            alt=""
          />
        </div>
        <div>
          <img className="round" speed={100}
            src="https://media.istockphoto.com/id/1366623793/photo/diverse-friends-group-takes-joyful-photo-after-graduation.jpg?s=612x612&w=0&k=20&c=HM9tFxrmaMPgaYBpqs6_V6S3mGYBSuMxKvo8s5MMsJk="
            alt=""
          />
        </div>
        <div>
          <img className="round" speed={100}
            src="https://media.istockphoto.com/id/1406892549/photo/portrait-of-smiling-graduate-in-gown-and-hat-standing-alone-on-university-campus-at.jpg?s=612x612&w=0&k=20&c=Qs92u5C0eSUZ3v3H4sT9CCq0OQNN5RiUR_y2ukhGnf8="
            alt=""
          />
        </div>
        <div>
          <img className="round" speed={100}
            src="https://media.istockphoto.com/id/1474048273/vector/class-of-2023-vector-text-for-graduation-silver-design-congratulation-event-t-shirt-party.jpg?s=612x612&w=0&k=20&c=H9-haKWnCBwbcx0TaGciur0p4_q5w0k8VKOc8KMFQns="
            alt=""
          />
        </div>
        <div>
          <img className="round" speed={100}
            src="https://media.istockphoto.com/id/1349302572/photo/happy-group-of-graduate-students-in-a-row-holding-their-diplomas.jpg?s=612x612&w=0&k=20&c=iowe7MlEZ0FVHIPsd7RNqrMQXNxTLt5yJ6zcu4Y06pY="
            alt=""
          />
        </div>
        <div>
          <img className="round" speed={100}
            src="https://media.istockphoto.com/id/1496191979/photo/young-graduates-applauding-while-celebrating-on-graduation.jpg?s=612x612&w=0&k=20&c=6TqtDPkju00Aoto5SePbnXAcTikLA_uiptTnPorftIY="
            alt=""
          />
        </div>
        <div>
          <img className="round" speed={100}
            src="https://media.istockphoto.com/id/1366624381/photo/young-adult-mom-in-cap-and-gown-smiles-at-daughter.jpg?s=612x612&w=0&k=20&c=lE5LJ4kJJafQgdobLcWmIOXrwMpGurUcvS_qUZ6D76A="
            alt=""
          />
        </div>
        <div>
          <img className="round" speed={100}
            src="https://media.istockphoto.com/id/1421945024/photo/proud-chinese-parents-walking-together-with-daughter-with-graduation-gowns-in-college.jpg?s=612x612&w=0&k=20&c=DBLwHFWCtgvpWhTs04n391ejEINbli_RdPcmRt09HcY="
            alt=""
          />
        </div>
      </Marquee>
    </div>
  );
};

export default GallerySection;
