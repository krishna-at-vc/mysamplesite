package com.mysamplesite.core.models;

import org.apache.sling.api.SlingHttpServletRequest;
import org.apache.sling.api.resource.Resource;
import org.apache.sling.models.annotations.DefaultInjectionStrategy;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.injectorspecific.ValueMapValue;
import org.apache.sling.models.annotations.injectorspecific.SlingObject;
import org.apache.commons.lang3.StringUtils;

import javax.annotation.PostConstruct;
import java.util.List;
import java.util.ArrayList;

@Model(adaptables = { SlingHttpServletRequest.class, Resource.class }, adapters = {
        HeroBannerModel.class }, resourceType = {
                HeroBannerModel.RESOURCE_TYPE }, defaultInjectionStrategy = DefaultInjectionStrategy.OPTIONAL)
public class HeroBannerModel {
    protected static final String RESOURCE_TYPE = "mysamplesite/components/heroBanner";

    @SlingObject
    private Resource resource;

    @ValueMapValue
    private String title;

    @ValueMapValue
    private String subtitle;

    @ValueMapValue
    private String backgroundImage;

    @ValueMapValue
    private String productImage;

    @ValueMapValue
    private String logoImage;

    private List<CTAButton> ctaButtons;

    @PostConstruct
    private void init() {
        ctaButtons = new ArrayList<>();
        Resource ctaResource = resource.getChild("ctaButtons");
        if (ctaResource != null) {
            for (Resource button : ctaResource.getChildren()) {
                CTAButton ctaButton = new CTAButton();
                ctaButton.setText(button.getValueMap().get("text", String.class));
                ctaButton.setLink(button.getValueMap().get("link", String.class));
                ctaButtons.add(ctaButton);
            }
        }
    }

    public String getTitle() {
        return title;
    }

    public String getSubtitle() {
        return subtitle;
    }

    public String getBackgroundImage() {
        return backgroundImage;
    }

    public String getProductImage() {
        return productImage;
    }

    public String getLogoImage() {
        return logoImage;
    }

    public List<CTAButton> getCtaButtons() {
        return ctaButtons;
    }

    public boolean isEmpty() {
        return StringUtils.isBlank(title) &&
                StringUtils.isBlank(subtitle) &&
                StringUtils.isBlank(backgroundImage) &&
                StringUtils.isBlank(productImage) &&
                StringUtils.isBlank(logoImage) &&
                (ctaButtons == null || ctaButtons.isEmpty());
    }

    public static class CTAButton {
        private String text;
        private String link;

        public String getText() {
            return text;
        }

        public void setText(String text) {
            this.text = text;
        }

        public String getLink() {
            return link;
        }

        public void setLink(String link) {
            this.link = link;
        }
    }
}