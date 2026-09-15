"use client";
import "./FeaturedWork.css";
import { useRef } from "react";
import { projects } from "./project.js";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function FeaturedWork() {
  const featuredWorkContainerRef = useRef(null);

  useGSAP(
    () => {
      const createFeaturedWorkItem = (project) => {
        const featuredWorkItem = document.createElement("div");
        featuredWorkItem.className = "featured-work-item";
        featuredWorkItem.innerHTML = `
        <div class="featured-work-frame">
          <div class="featured-work-item-img">
            <img src="${project.img}" alt="${project.name}" />
          </div>
        </div>
        <div class="featured-work-item-copy">
          <h3>${project.name}</h3>
          ${project.tag ? `<p class="sm">${project.tag}</p>` : ""}
        </div>
      `;
        return featuredWorkItem;
      };

      const workContainer = featuredWorkContainerRef.current;

      workContainer.innerHTML = "";

      for (let i = 0; i < projects.length; i += 2) {
        const row = document.createElement("div");
        row.className = "row";

        row.appendChild(createFeaturedWorkItem(projects[i]));

        if (i + 1 < projects.length) {
          row.appendChild(createFeaturedWorkItem(projects[i + 1]));
        }

        workContainer.appendChild(row);
      }

      gsap.set(".featured-work-item", {
        y: 1000,
      });

      document.querySelectorAll(".row").forEach((row) => {
        const featuredWorkItems = row.querySelectorAll(".featured-work-item");

        featuredWorkItems.forEach((item, itemIndex) => {
          const isLeftProjectItem = itemIndex === 0;
          gsap.set(item, {
            rotation: isLeftProjectItem ? -60 : 60,
            transformOrigin: "center center",
          });
        });

        ScrollTrigger.create({
          trigger: row,
          start: "top 70%",
          onEnter: () => {
            gsap.to(featuredWorkItems, {
              y: 0,
              rotation: 0,
              duration: 1,
              ease: "power4.out",
              stagger: 0.25,
            });
          },
        });
      });

    },
    { scope: featuredWorkContainerRef }
  );

  return (
    <>
      <div className="featured-work-list" ref={featuredWorkContainerRef}></div>
    </>
  );
}
