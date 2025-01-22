package com.mysamplesite.core.models;

import org.apache.sling.api.resource.Resource;
import org.apache.sling.models.annotations.DefaultInjectionStrategy;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.injectorspecific.ValueMapValue;
import org.apache.commons.lang3.StringUtils;

import javax.annotation.PostConstruct;
import java.util.Collections;
import java.util.List;

@Model(
    adaptables = Resource.class,
    defaultInjectionStrategy = DefaultInjectionStrategy.OPTIONAL
)
public class PropertyCarousel {

    @ValueMapValue
    private String heading;

    @ValueMapValue
    private String description;

    @ValueMapValue
    private List<PropertyItem> properties;

    @ValueMapValue
    private String ctaButtonText;

    @ValueMapValue
    private String ctaButtonLink;

    @PostConstruct
    private void init() {
        // Initialize default values if needed
        if (StringUtils.isBlank(heading)) {
            heading = "Our properties";
        }
    }

    // Getters
    public String getHeading() {
        return heading;
    }

    public String getDescription() {
        return description;
    }

    public List<PropertyItem> getProperties() {
        return properties != null ? properties : Collections.emptyList();
    }

    public String getCtaButtonText() {
        return ctaButtonText;
    }

    public String getCtaButtonLink() {
        return ctaButtonLink;
    }

    // Inner class for Property items
    public static class PropertyItem {
        private String image;
        private String propertyName;
        private String propertyLocation;
        private List<String> propertyTags;
        private String enquireLink;
        private String viewLink;

        // Getters
        public String getImage() {
            return image;
        }

        public String getPropertyName() {
            return propertyName;
        }

        public String getPropertyLocation() {
            return propertyLocation;
        }

        public List<String> getPropertyTags() {
            return propertyTags != null ? propertyTags : Collections.emptyList();
        }

        public String getEnquireLink() {
            return enquireLink;
        }

        public String getViewLink() {
            return viewLink;
        }

        // Setters
        public void setImage(String image) {
            this.image = image;
        }

        public void setPropertyName(String propertyName) {
            this.propertyName = propertyName;
        }

        public void setPropertyLocation(String propertyLocation) {
            this.propertyLocation = propertyLocation;
        }

        public void setPropertyTags(List<String> propertyTags) {
            this.propertyTags = propertyTags;
        }

        public void setEnquireLink(String enquireLink) {
            this.enquireLink = enquireLink;
        }

        public void setViewLink(String viewLink) {
            this.viewLink = viewLink;
        }
    }
} 