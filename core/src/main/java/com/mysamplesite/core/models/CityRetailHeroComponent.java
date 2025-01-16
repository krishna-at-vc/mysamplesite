package com.mysamplesite.core.models;

import org.apache.sling.api.SlingHttpServletRequest;
import org.apache.sling.api.resource.Resource;
import org.apache.sling.models.annotations.DefaultInjectionStrategy;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.injectorspecific.ValueMapValue;

@Model(adaptables = { SlingHttpServletRequest.class,
        Resource.class }, resourceType = "mysamplesite/components/cityRetailHero", defaultInjectionStrategy = DefaultInjectionStrategy.OPTIONAL)
public class CityRetailHeroComponent {

    @ValueMapValue
    private String category;

    @ValueMapValue
    private String title;

    @ValueMapValue
    private String description;

    @ValueMapValue
    private String ctaLabel;

    @ValueMapValue
    private String ctaLink;

    @ValueMapValue
    private String image;

    @ValueMapValue
    private String imageAlt;

    // Getters
    public String getCategory() {
        return category;
    }

    public String getTitle() {
        return title;
    }

    public String getDescription() {
        return description;
    }

    public String getCtaLabel() {
        return ctaLabel;
    }

    public String getCtaLink() {
        return ctaLink;
    }

    public String getImage() {
        return image;
    }

    public String getImageAlt() {
        return imageAlt;
    }
}